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
            state.activekeys.push(mnu.parentkey);
        }
        state.activekeys.push(mnu.key);
        Session.setJSON("activemenu",state);
    },
    setStateByRoute: function (route) {
        var item = MenuItems.findOne({"route" : route});

        if (item) {
            this.setState(item);
            this.closeSubmenus();
        } else {
            item = MenuItems.findOne({"subitems.route": route}, {_id: 0, subitems: {$elemMatch: {route: route}}});
            if (item && item.subitems) {
                var subitem = _.find(item.subitems, function (item) {
                    return item.route === route
                });
                this.setState(subitem);
                this.checkIfSubmenuOpen(item);

            } else {
                //TODO: something is wrong when it ends here???
                return;
            }
        }
    },
    closeSubmenus: function() {
        var submenus = $('.mm-hasheader').each(function (index, value) {
            if ($(value).hasClass('mm-opened')) {
                $(value).removeClass('mm-current').removeClass('mm-opened');
                $('#mm-1').removeClass('mm-subopened').addClass('mm-current');
            }
        });
    },

    checkIfSubmenuOpen : function(mnu) {
        var a = $('#' + mnu.key + ' a:first-of-type');
        var target = $(a).data("target");
        var divcss = $(target).attr('class');
        //if submenu is not open, open it
        if (!$(target).hasClass('mm-opened')) {
            this.openSubmenu(target);
        }
    },
    openSubmenu: function(target){
        $(target).removeClass('mm-hidden');
        $(target).addClass('mm-current mm-opened');
        $('#mm-1').removeClass('mm-current').addClass('mm-subopened');
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
