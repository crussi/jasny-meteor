Template['profilesignout'].events({
    "click #signout": function (e) {
        console.log("profile logout");
        e.preventDefault();
        logout();
    },
    "click #account": function (e) {
        console.log("profile clicked");
        e.preventDefault();
        FlowRouter.go('/settings/profile');
    }
});

Template['profilesignout'].helpers({
    userName: function() {
        if (Meteor.user()) {
            return Meteor.user().profile.name;
        } else {
            return '';
        }
    }
});