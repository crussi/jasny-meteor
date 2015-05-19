

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
}

