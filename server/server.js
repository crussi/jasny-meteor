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

    Meteor.publish("reminders", function () {
        console.log('publish reminders');
        return Reminders.find({});
    });

    Meteor.methods({
        addTask: function (text) {
            // Make sure the user is logged in before inserting a task
            if (! Meteor.userId()) {
                throw new Meteor.Error("not-authorized");
            }

            Tasks.insert({
                text: text,
                createdAt: new Date(),
                owner: Meteor.userId(),
                username: Meteor.user().username
            });
        },
        deleteTask: function (taskId) {
            Tasks.remove(taskId);
        },
        setChecked: function (id, done) {
            console.log('setChecked');
            // Make sure the user is logged in before inserting a task
            if (! Meteor.userId()) {
                throw new Meteor.Error("not-authorized");
            }
            TodoToday.update(id, { $set: { done: done} });
        }
    });

}
