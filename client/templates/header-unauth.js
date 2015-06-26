Template['headerunauth'].events({
    'click #signin' : function(e, t) {
        console.log('signin');
        FlowRouter.go('/signin');
    },
    'click #signup' : function(e, t) {
        console.log('signup');
        FlowRouter.go('/signup');

    }
});
