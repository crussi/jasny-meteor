

Template['remindersdropdown'].events({
    "click .lv-item": function(e) {
        e.preventDefault();
        console.log(e.currentTarget.id);
    },
    "click .lv-footer": function(e){
        e.preventDefault();
        console.log('view all');
    },
    "click .dropdown": function(e){
        e.preventDefault();
        console.log('done all');
    }
});