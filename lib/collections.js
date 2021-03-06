MenuItems = new Mongo.Collection("menuitems");
TodoToday = new Mongo.Collection("tasks");
Reminders = new Mongo.Collection("reminders");

TodoToday.helpers({
    isDone: function() {
        return this.done;
    }

});

Reminders.helpers({
    isDone: function() {
        return this.done;
    },
    daynumber: function() {
        return moment(this.datescheduled).format('D');
    },
    dayofweek: function() {
        return moment(this.datescheduled).format('dddd');
    },
    datedisplay: function(){
        var weekday = moment(this.datescheduled).format('dddd').substring(0,3);
        return weekday + ', ' + moment(this.datescheduled).format('M/D, h:mm a');
    }

});

menuHelper =  {
    clearState: function() {
        console.log("clear state");
        Session.setJSON("activemenu",{});
        //console.log('before this.closeSubmenus');
        this.closeSubmenus();
    },
    setState: function(mnu) {
        console.log("setState called " + mnu.key);
        var state = {
            activekeys:[],
            color: mnu.color,
            route: mnu.route
        };
        if (this.isSelected(mnu.key)) {
            return;
        }
        state.color = mnu.color;
        state.route = mnu.route;
        if (mnu.parentkey != "") {
            state.activekeys.push(mnu.parentkey);
        }
        state.activekeys.push(mnu.key);
        Session.setJSON("activemenu",state);
    },
    setStateByRoute: function (route) {
        var item = MenuItems.findOne({"route" : route});
        var a, target, id;
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

                a = $('#' + item.key + ' a:first-of-type');
                target = $(a).data("target");
                id = $(target).attr('id');

                if (!this.isSubmenuOpen(item)) {
                    console.log('submenu not open so open');
                    this.openSubmenu(target);
                }
                this.closeSubmenus(id);
            } else {
                //TODO: something is wrong when it ends here???
                //console.log('something is wrong when it ends here???');
                return;
            }
        }
    },
    isSelected: function(key) {
        var keys = Session.getJSON("activemenu.activekeys");
        if (keys) {
            return keys.indexOf(key) >= 0;
        } else {
            return false;
        }
    },
    closeSubmenus: function(id) {
        //console.log('call to closeSubmenus');
        var submenus = $('.mm-hasheader').each(function (index, value) {
            //console.log('checking if submenu is open');
            if ($(value).hasClass('mm-opened') && $(value).attr('id') != id) {
                console.log('closing submenu');
                $(value).removeClass('mm-current').removeClass('mm-opened');
                $('.mm-panel').first().removeClass('mm-subopened').addClass('mm-current');
            }
        });
    },

    isSubmenuOpen : function(mnu) {
        var a = $('#' + mnu.key + ' a:first-of-type');
        var target = $(a).data("target");
        return ($(target).hasClass('mm-opened'));
    },
    openSubmenu: function(target){
        $(target).removeClass('mm-hidden');
        $(target).addClass('mm-current mm-opened');
        $('.mm-panel').first().removeClass('mm-current').addClass('mm-subopened');
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
