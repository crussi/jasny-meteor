

FlowRouter.route('/',{
    subscriptions: function(params) {
        this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        console.log('route / ... flow action');
            FlowLayout.render('layout-unauth', { header: "header-unauth", content: "content-mktg"});
    }
});

FlowRouter.route('/signin',{
    subscriptions: function(params) {
        console.log('flow sub');

    },
    action: function() {
        console.log('/signin route');
        FlowLayout.render('layout-unauth', { header: "header-unauth", content: "login"});
    }
});


FlowRouter.route('/signup',{
    subscriptions: function(params) {
        console.log('flow sub');

    },
    action: function() {
        console.log('/signup route');
        FlowLayout.render('layout-unauth', { header: "header-unauth", content: "register"});
    }
});

FlowRouter.route('/app',{
    subscriptions: function(params) {
        console.log('flow sub');

    },
    action: function() {
        console.log('/signup route');
        FlowLayout.render('layout-auth', { header: "header-auth", content: "app"});
    }
});