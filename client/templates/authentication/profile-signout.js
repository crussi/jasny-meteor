Template['profilesignout'].events({
    "click #signout": function () {
        console.log("profile logout");
        logout();
    },
    "click #account": function () {
        console.log("profile clicked");
        FlowRouter.go('/settings/profile');
    },
    "click #clearstate": function () {
        console.log("clear state clicked");
        renderDashboard();
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