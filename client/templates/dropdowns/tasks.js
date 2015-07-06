
Template['tasksdropdown'].helpers({
    todotoday: function () {
        return TodoToday.find({});
    }
});

Template['task'].helpers({
    isChecked: function () {
        console.log('task isChecked');
        return "checked";
    }
});

Template['task'].onRendered(function () {
    $(function() {
        $.material.checkbox();
    });
});

Template['tasksdropdown'].events({
    "click .lv-item": function(e) {
        e.preventDefault();

        console.log(e.currentTarget.id);
    },
    "click .lv-footer": function(e){
        e.preventDefault();
        console.log('view all');
    },
    "click div.checkbox": function(e,t){
        e.preventDefault();
        e.stopPropagation();
        var id = e.currentTarget.id.substring(0, 22);
        console.log('id: ' + id);
        var chk = '#' + id + 'chk';
        console.log('chk: ' + chk);
        console.log($(chk).attr('id'));
        $(chk).prop('checked', !$(chk).prop('checked'));

    }
});