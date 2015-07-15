
Template['tasksdropdown'].helpers({
    todotoday: function () {
        return TodoToday.find({});
    }
});

Template['tasksdropdown'].events({
    "click .lv-footer": function(e){
        e.preventDefault();
        console.log('go to next today');
        FlowRouter.go('/next/today');
    },
    "click #checkall": function(e){
        e.preventDefault();
        e.stopPropagation();
        var tasks = TodoToday.find();
        tasks.forEach(function(task){
            var chk = '#' + formatId(task._id) + '-chk';
            if (!$(chk).prop('checked')) {
                $(chk).prop('checked', true);
                Meteor.call("setChecked", task._id, $(chk).prop('checked'));
            }
        });
    }
});

Template['task'].helpers({
    isChecked: function () {
        console.log('task isChecked');
        return this.isDone() ? "checked" : "";
    }
});

Template['task'].onRendered(function () {
    $(function() {
        $.material.checkbox();
    });
});


Template['task'].events({
    "click .lv-item": function(e) {
        e.preventDefault();

        console.log(e.currentTarget.id);

    },

    "click div.checkbox": function(e,t){
        e.preventDefault();
        e.stopPropagation();
        var id = e.currentTarget.id.split('-')[0];
        //console.log('id: ' + id);
        var chk = '#' + id + '-chk';
        //console.log('chk: ' + chk);
        //console.log($(chk).attr('id'));

        $(chk).prop('checked', !$(chk).prop('checked'));
        //TodoToday.update({_id:id},{done:!$(chk).prop('checked')});
        //console.log('!$(chk).prop(checked): ' + !$(chk).prop('checked'));
        Meteor.call("setChecked", this._id, $(chk).prop('checked'));
    }
});

