if (Meteor.isServer) {

    Meteor.startup(function () {
        // code to run on server at startup
    });

    // Only publish tasks that are public or belong to the current user
    Meteor.publish("menu-items", function () {
        console.log('publish menu-items');
        return MenuItems.find({});
    });

    Meteor.publish("todotoday", function () {
        console.log('publish todotoday');
        return TodoToday.find({});
    });

}
