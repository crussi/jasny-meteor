MenuItems = new Mongo.Collection("menuitems");

menuHelper =  {
    clearState: function() {
        Session.setJSON("activemenu",{});
    },
    setState: function(mnu) {
        console.log("setState called " + mnu.key);
        var state = {
            activekeys:[],
            color: mnu.color,
            route: mnu.route
        };
        if (mnu.parentkey != "") {
            //console.log("I pushed parentkey: " + mnu.parentkey);
            state.activekeys.push(mnu.parentkey);
        }
        state.activekeys.push(mnu.key);

        Session.setJSON("activemenu",state);
        //console.log("here is activemenu state: " + Session.getJSON("activemenu.color"));
    },
    setStateByRoute: function (route) {
        console.log("*** setStateByRoute " + route);
        var item = MenuItems.findOne({"route" : route});

        if (item) {
            this.setState(item);
            var submenus = $('.mm-hasheader').each(function (index, value) {
                //console.log('index: ' + index + ' value: ' + value);
                if ($(value).hasClass('mm-opened')) {
                    console.log('divcss is open: ' + $(value).attr('class'));
                    $(value).removeClass('mm-current').removeClass('mm-opened');
                } else {
                    console.log('divcss is not open');
                }

            });
        } else {
            console.log("item not found");

            item = MenuItems.findOne({"subitems.route": route}, {_id: 0, subitems: {$elemMatch: {route: route}}});
            if (item && item.subitems) {
                var subitem = _.find(item.subitems, function (item) {
                    return item.route === route
                });
                this.setState(subitem);
                var a = $('#' + item.key + ' a:first-of-type');
                var target = $(a).data("target");
                //console.log('target: ' + target);
                var divcss = $(target).attr('class');
                console.log('divcss: ' + divcss);
                if ($(target).hasClass('mm-opened')) {
                    console.log('divcss is open');
                } else {

                    console.log('making divcss not hidden');
                    $(target).removeClass('mm-hidden');
                    $(target).addClass('mm-current mm-opened');
                }

            } else {
                console.log('something is wrong');
                return;
            }
            console.log('*** done ***');
        }
        //var maindivcss = $('#mm-1').attr('class');
        //console.log('maindivcss: ' + maindivcss);
        //var x = $('#O5T2A74BCk6pzxdbtMmZ6Q a:first-of-type');
        //var xtarget = $(x).data("target");
        //console.log('xtarget: ' + xtarget);
        //var divcss = $(xtarget).attr('class');
        //console.log('xdivcss: ' + divcss);



    },
    hasRoute: function(mnu) {
        return mnu.route.trim().length > 0;
    },
    isActive: function(mnu) {
        //console.log("activekeys: " + Session.getJSON("activemenu.activekeys"));
        //console.log($.inArray(mnu.key, Session.getJSON("activemenu.activekeys")));
        return $.inArray(mnu.key, Session.getJSON("activemenu.activekeys")) > -1;
    }
}
