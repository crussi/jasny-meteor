

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

var approutes = FlowRouter.group({
    subscriptions: function(params) {
        this.register('menuItems', Meteor.subscribe('menu-items', params.postId));
    }
});

approutes.route('/app',{
    //subscriptions: function(params) {
    //    console.log('flow sub');
    //    this.register('menuItems', Meteor.subscribe('menu-items', params.postId));
    //},
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

approutes.route('/inbox',{
    //subscriptions: function(params) {
    //    this.register('menuItems', Meteor.subscribe('menu-items', params.postId));
    //},
    action: function() {
        console.log('/inbox route');
        FlowLayout.render('layout-auth', { content: "inbox"});
    }
});

var next = approutes.group({
    prefix: '/next'
});

next.route('/today',{
    action: function() {
        console.log('/next/today route');
        FlowLayout.render('layout-auth', { content: "today"});
    }
});

next.route('/thisweek',{
    subscriptions: function(params) {
        this.register('menuItems', Meteor.subscribe('menu-items', params.postId));
    },
    action: function() {
        console.log('/next/today route');
        FlowLayout.render('layout-auth', { content: "thisweek"});
    }
});

next.route('/soon',{
    action: function() {
        console.log('/next/today route');
        FlowLayout.render('layout-auth', { content: "soon"});
    }
});

approutes.route('/focus',{
    action: function() {
        console.log('/focus route');
        FlowLayout.render('layout-auth', { content: "focus"});
    }
});

approutes.route('/waitingfor',{
    action: function() {
        console.log('/waitingfor route');
        FlowLayout.render('layout-auth', { content: "waitingfor"});
    }
});

var scheduled = approutes.group({
    prefix: '/scheduled'
});


scheduled.route('/calendar',{
    action: function() {
        console.log('/waitingfor route');
        FlowLayout.render('layout-auth', { content: "calendar"});
    }
});

scheduled.route('/reminders',{
    action: function() {
        console.log('/scheduled/reminders route');
        FlowLayout.render('layout-auth', { content: "reminders"});
    }
});

approutes.route('/someday',{
    action: function() {
        console.log('/someday route');
        FlowLayout.render('layout-auth', { content: "someday"});
    }
});


approutes.route('/projects/:id',{
    action: function() {
        console.log('/projects/1 route id: ' + params.id);
        FlowLayout.render('layout-auth', { content: "project"});
    }
});

approutes.route('/review',{
    action: function() {
        console.log('/review route');
        FlowLayout.render('layout-auth', { content: "review"});
    }
});



var lists = approutes.group({
    prefix: '/lists'
    //subscriptions: function(params) {
    //    this.register('menuItems', Meteor.subscribe('menu-items', params.postId));
    //}
});

lists.route('/checklists',{
    action: function() {
        console.log('/lists/checklists route');
        FlowLayout.render('layout-auth', { content: "lists"});
    }
});

lists.route('/reference',{
    action: function() {
        console.log('/lists/reference route');
        FlowLayout.render('layout-auth', { content: "lists"});
    }
});

lists.route('/done',{
    action: function() {
        console.log('/lists/done route');
        FlowLayout.render('layout-auth', { content: "lists"});
    }
});

var contexts = approutes.group({
    prefix: '/contexts',
    //subscriptions: function(params) {
    //    this.register('menuItems', Meteor.subscribe('menu-items', params.postId));
    //}
});

contexts.route('/roles',{
    action: function() {
        console.log('/contexts/roles route');
        FlowLayout.render('layout-auth', { content: "roles"});
    }
});

contexts.route('/roles',{
    subscriptions: function(params) {
        this.register('menuItems', Meteor.subscribe('menu-items', params.postId));
    },
    action: function() {
        console.log('/roles route');
        FlowLayout.render('layout-auth', { content: "roles"});
    }
});

contexts.route('/contexts',{
    action: function() {
        console.log('/contexts/contexts route');
        FlowLayout.render('layout-auth', { content: "contexts"});
    }
});

contexts.route('/flags',{
    action: function() {
        console.log('/contexts/flags route');
        FlowLayout.render('layout-auth', { content: "flags"});
    }
});

contexts.route('/delegates',{
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