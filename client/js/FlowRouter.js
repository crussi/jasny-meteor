

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