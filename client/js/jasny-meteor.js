

if (Meteor.isClient) {

    Meteor.startup(function() {

    });

    //Meteor.subscribe("menuitems",function() {
    //    console.log('subscribe data loaded');
    //    Session.set('data_loaded', true);
    //});
    FlowRouter.route('/',{
        subscriptions: function(params) {
            console.log('flow sub');
            this.register('menuItems', Meteor.subscribe('menu-items'));
        },
        action: function() {
            console.log('flow action');
            //FlowLayout.render('menu');
        }
    });
    Template.content.helpers({
        isReady: function(sub){
            console.log("check if isReady");

            if(sub){
                return FlowRouter.subsReady(sub);
            } else {
                return FlowRouter.subsReady();
            }
        }
    });
    Template.content.events({
        "click .navbar-toggle": function () {
            navbarToggle();
        }
    });
    Template.menu.helpers({

        menuitems: function () {
            console.log("returning menuitems");
            return MenuItems.find({});
        }
    });
    Template.menu.rendered = function() {
        console.log("menu rendered");
        $("#menu").mmenu({extensions: ["widescreen"]}).on('click',
            'a[href^="#/"]',
            function() {
                closeMenu();
                return false;
            }
        );
    }


    function navbarToggle () {
            console.log("navarToggle");
            $("#menu").toggleClass("mm-current").toggleClass("mm-opened");
            $("html").toggleClass("mm-widescreen").toggleClass("mm-opened").toggleClass("mm-opening");
        }
    function closeMenu () {
            console.log("closeMenu ...");
            if ($("#menu").hasClass("mm-current")) {
                $("#menu").removeClass("mm-current");
                $("html").removeClass("mm-opened").removeClass("mm-opening");
            }
        }

}


