

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
        FlowLayout.render('layout-auth', { header: "header-auth", content: "app", menu: "layout-menu"});
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

FlowRouter.route('/inbox',{
    subscriptions: function(params) {
        this.register('menuItems', Meteor.subscribe('menu-items', params.postId));
    },
    action: function() {
        console.log('/inbox route');
        FlowLayout.render('layout-auth', { content: "inbox"});
    }
});

FlowRouter.route('/next/today',{
    subscriptions: function(params) {
        this.register('menuItems', Meteor.subscribe('menu-items', params.postId));
    },
    action: function() {
        console.log('/next/today route');
        FlowLayout.render('layout-auth', { content: "today"});
    }
});

FlowRouter.route('/next/thisweek',{
    subscriptions: function(params) {
        this.register('menuItems', Meteor.subscribe('menu-items', params.postId));
    },
    action: function() {
        console.log('/next/today route');
        FlowLayout.render('layout-auth', { content: "thisweek"});
    }
});

FlowRouter.route('/next/soon',{
    subscriptions: function(params) {
        this.register('menuItems', Meteor.subscribe('menu-items', params.postId));
    },
    action: function() {
        console.log('/next/today route');
        FlowLayout.render('layout-auth', { content: "soon"});
    }
});

FlowRouter.route('/focus',{
    subscriptions: function(params) {
        this.register('menuItems', Meteor.subscribe('menu-items', params.postId));
    },
    action: function() {
        console.log('/focus route');
        FlowLayout.render('layout-auth', { content: "focus"});
    }
});

FlowRouter.route('/waitingfor',{
    subscriptions: function(params) {
        this.register('menuItems', Meteor.subscribe('menu-items', params.postId));
    },
    action: function() {
        console.log('/waitingfor route');
        FlowLayout.render('layout-auth', { content: "waitingfor"});
    }
});

FlowRouter.route('/scheduled/calendar',{
    subscriptions: function(params) {
        this.register('menuItems', Meteor.subscribe('menu-items', params.postId));
    },
    action: function() {
        console.log('/waitingfor route');
        FlowLayout.render('layout-auth', { content: "calendar"});
    }
});

FlowRouter.route('/scheduled/reminders',{
    subscriptions: function(params) {
        this.register('menuItems', Meteor.subscribe('menu-items', params.postId));
    },
    action: function() {
        console.log('/scheduled/reminders route');
        FlowLayout.render('layout-auth', { content: "reminders"});
    }
});

FlowRouter.route('/someday',{
    subscriptions: function(params) {
        this.register('menuItems', Meteor.subscribe('menu-items', params.postId));
    },
    action: function() {
        console.log('/someday route');
        FlowLayout.render('layout-auth', { content: "someday"});
    }
});

FlowRouter.route('/projects/1',{
    subscriptions: function(params) {
        this.register('menuItems', Meteor.subscribe('menu-items', params.postId));
    },
    action: function() {
        console.log('/projects/1 route');
        FlowLayout.render('layout-auth', { content: "project"});
    }
});

FlowRouter.route('/projects/2',{
    subscriptions: function(params) {
        this.register('menuItems', Meteor.subscribe('menu-items', params.postId));
    },
    action: function() {
        console.log('/projects/2 route');
        FlowLayout.render('layout-auth', { content: "project"});
    }
});

FlowRouter.route('/projects/3',{
    subscriptions: function(params) {
        this.register('menuItems', Meteor.subscribe('menu-items', params.postId));
    },
    action: function() {
        console.log('/projects/3 route');
        FlowLayout.render('layout-auth', { content: "project"});
    }
});

FlowRouter.route('/review',{
    subscriptions: function(params) {
        this.register('menuItems', Meteor.subscribe('menu-items', params.postId));
    },
    action: function() {
        console.log('/review route');
        FlowLayout.render('layout-auth', { content: "review"});
    }
});

FlowRouter.route('/lists/checklists',{
    subscriptions: function(params) {
        this.register('menuItems', Meteor.subscribe('menu-items', params.postId));
    },
    action: function() {
        console.log('/lists/checklists route');
        FlowLayout.render('layout-auth', { content: "lists"});
    }
});

FlowRouter.route('/lists/reference',{
    subscriptions: function(params) {
        this.register('menuItems', Meteor.subscribe('menu-items', params.postId));
    },
    action: function() {
        console.log('/lists/reference route');
        FlowLayout.render('layout-auth', { content: "lists"});
    }
});

FlowRouter.route('/lists/done',{
    subscriptions: function(params) {
        this.register('menuItems', Meteor.subscribe('menu-items', params.postId));
    },
    action: function() {
        console.log('/lists/done route');
        FlowLayout.render('layout-auth', { content: "lists"});
    }
});

FlowRouter.route('/contexts/roles',{
    subscriptions: function(params) {
        this.register('menuItems', Meteor.subscribe('menu-items', params.postId));
    },
    action: function() {
        console.log('/contexts/roles route');
        FlowLayout.render('layout-auth', { content: "roles"});
    }
});

FlowRouter.route('/contexts/roles',{
    subscriptions: function(params) {
        this.register('menuItems', Meteor.subscribe('menu-items', params.postId));
    },
    action: function() {
        console.log('/contexts/roles route');
        FlowLayout.render('layout-auth', { content: "roles"});
    }
});

FlowRouter.route('/contexts/contexts',{
    subscriptions: function(params) {
        this.register('menuItems', Meteor.subscribe('menu-items', params.postId));
    },
    action: function() {
        console.log('/contexts/contexts route');
        FlowLayout.render('layout-auth', { content: "contexts"});
    }
});

FlowRouter.route('/contexts/flags',{
    subscriptions: function(params) {
        this.register('menuItems', Meteor.subscribe('menu-items', params.postId));
    },
    action: function() {
        console.log('/contexts/flags route');
        FlowLayout.render('layout-auth', { content: "flags"});
    }
});

FlowRouter.route('/contexts/delegates',{
    subscriptions: function(params) {
        this.register('menuItems', Meteor.subscribe('menu-items', params.postId));
    },
    action: function() {
        console.log('/contexts/delegates route');
        FlowLayout.render('layout-auth', { content: "delegates"});
    }
});

FlowRouter.route('/settings',{
    subscriptions: function(params) {
        this.register('menuItems', Meteor.subscribe('menu-items', params.postId));
    },
    action: function() {
        console.log('/settings route');
        FlowLayout.render('layout-auth', { content: "settings"});
    }
});