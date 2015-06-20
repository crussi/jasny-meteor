

FlowRouter.route('/',{
    subscriptions: function(params) {
        this.register('menuItems', Meteor.subscribe('menu-items'));
    },
    action: function() {
        if (Meteor.user()) {
            FlowLayout.render('layout-auth', { content: "dashboard"});
        } else {
            FlowLayout.render('layout-unauth', { header: "header-unauth", content: "content-mktg"});
        }

    }
});

FlowRouter.route('/signin',{
    subscriptions: function(params) {
    },
    action: function() {
        console.log('/signin route');
        FlowLayout.render('layout-unauth', { header: "header-unauth", content: "signin"});
    }
});


FlowRouter.route('/signup',{
    subscriptions: function(params) {

    },
    action: function() {
        FlowLayout.render('layout-unauth', { header: "header-unauth", content: "signup"});
    }
});

var approutes = FlowRouter.group({
    subscriptions: function(params) {
        this.register('menuItems', Meteor.subscribe('menu-items', params.postId));
    }
});

approutes.route('/dashboard',{
    action: function() {
        menuHelper.clearState();
        FlowLayout.render('layout-auth', { content: "dashboard"});
    }
});

approutes.route('/inbox',{
    action: function() {
        menuHelper.setStateByRoute('/inbox');
        FlowLayout.render('layout-auth', { content: "inbox"});
    }
});

var next = approutes.group({
    prefix: '/next'
});

next.route('/today',{
    action: function() {
        menuHelper.setStateByRoute('/next/today');
        FlowLayout.render('layout-auth', { content: "today"});
    }
});

next.route('/thisweek',{
    action: function() {
        menuHelper.setStateByRoute('/next/thisweek');
        FlowLayout.render('layout-auth', { content: "thisweek"});
    }
});

next.route('/soon',{
    action: function() {
        menuHelper.setStateByRoute('/next/soon');
        FlowLayout.render('layout-auth', { content: "soon"});
    }
});

approutes.route('/focus',{
    action: function() {
        menuHelper.setStateByRoute('/focus');
        FlowLayout.render('layout-auth', { content: "focus"});
    }
});

approutes.route('/waitingfor',{
    action: function() {
        menuHelper.setStateByRoute('/waitingfor');
        FlowLayout.render('layout-auth', { content: "waitingfor"});
    }
});

var scheduled = approutes.group({
    prefix: '/scheduled'
});


scheduled.route('/calendar',{
    action: function() {
        menuHelper.setStateByRoute('/calendar');
        FlowLayout.render('layout-auth', { content: "calendar"});
    }
});

scheduled.route('/reminders',{
    action: function() {
        menuHelper.setStateByRoute('/reminders');
        FlowLayout.render('layout-auth', { content: "reminders"});
    }
});

approutes.route('/someday',{
    action: function() {
        menuHelper.setStateByRoute('/someday');
        FlowLayout.render('layout-auth', { content: "someday"});
    }
});

approutes.route('/projects/:id',{
    action: function(params) {
        console.log('/projects/1 route id: ' + params.id);
        FlowLayout.render('layout-auth', { content: "project"});
    }
});

approutes.route('/review',{
    action: function() {
        menuHelper.setStateByRoute('/review');
        FlowLayout.render('layout-auth', { content: "review"});
    }
});

var lists = approutes.group({
    prefix: '/lists'
});

lists.route('/:checklists',{
    action: function() {
        menuHelper.setStateByRoute('/lists/checklists');
        FlowLayout.render('layout-auth', { content: "lists"});
    }
});

lists.route('/reference',{
    action: function() {
        menuHelper.setStateByRoute('/lists/reference');
        FlowLayout.render('layout-auth', { content: "lists"});
    }
});

lists.route('/done',{
    action: function() {
        menuHelper.setStateByRoute('/lists/done');
        FlowLayout.render('layout-auth', { content: "lists"});
    }
});

var contexts = approutes.group({
    prefix: '/contexts',
});

contexts.route('/roles',{
    action: function() {
        menuHelper.setStateByRoute('/contexts/roles');
        FlowLayout.render('layout-auth', { content: "roles"});
    }
});

contexts.route('/contexts',{
    action: function() {
        menuHelper.setStateByRoute('/contexts/contexts');
        FlowLayout.render('layout-auth', { content: "contexts"});
    }
});

contexts.route('/flags',{
    action: function() {
        menuHelper.setStateByRoute('/contexts/flags');
        FlowLayout.render('layout-auth', { content: "flags"});
    }
});

contexts.route('/delegates',{
    action: function() {
        menuHelper.setStateByRoute('/contexts/delegates');
        FlowLayout.render('layout-auth', { content: "delegates"});
    }
});

approutes.route('/settings',{
    action: function() {
        menuHelper.setStateByRoute('/settings');
        FlowLayout.render('layout-auth', { content: "settings"});
    }
});