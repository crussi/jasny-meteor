

FlowRouter.route('/',{
    subscriptions: function(params) {
        this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        console.log('route / ... flow action');
        if (Meteor.user()) {
            FlowLayout.render('layout-auth', { header: "header-auth", content: "app"});
        } else {
            FlowLayout.render('layout-unauth', { header: "header-unauth", content: "content-mktg"});
        }

    }
});

FlowRouter.route('/signin',{
    subscriptions: function(params) {
        console.log('flow sub');

    },
    action: function() {
        console.log('/signin route');
        FlowLayout.render('layout-unauth', { header: "header-unauth", content: "signin"});
    }
});


FlowRouter.route('/signup',{
    subscriptions: function(params) {
        console.log('flow sub');

    },
    action: function() {
        console.log('/signup route');
        FlowLayout.render('layout-unauth', { header: "header-unauth", content: "signup"});
    }
});

FlowRouter.route('/app',{
    subscriptions: function(params) {
        console.log('flow sub');
        this.register('menuItems', Meteor.subscribe('menu-items', params.postId));
    },
    action: function() {
        console.log('/app route');
        FlowLayout.render('layout-auth', { header: "header-auth", content: "app"});
    }
});

FlowRouter.route('/help-signin',{
    subscriptions: function(params) {
        console.log('flow sub');

    },
    action: function() {
        console.log('/signup route');
        FlowLayout.render('layout-auth', { header: "header-auth", content: "app"});
    }
});