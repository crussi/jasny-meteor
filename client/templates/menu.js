
closeMenu = function () {
    if ($("#menu").hasClass("mm-current")) {
        $("#menu").removeClass("mm-current");
        $("#nav-auth").removeClass("mm-opened");
        $("#nav-auth").addClass("mm-closed");
        $("html").removeClass("mm-opened").removeClass("mm-opening");
    }
}
prepMenuitemClasses = function (color,id) {
    var active = (id == Session.get("active-menuitem-id")) ? color + '-500 ' : '';
    return "mm-item " + active;
}
prepMenusubitemClasses = function (color,id) {
    var active = (id == Session.get("active-submenuitem-id")) ? color + '-500 ' : '';
    return "mm-subitem " + active;
}

Template['menu'].helpers({
    menuitems: function () {
        console.log("returning menuitems");
        return MenuItems.find({});
    }
});
Template['menuitem'].helpers({
    getClass: function (color,id) {
        return prepMenuitemClasses(color,id);
    }
});
Template['submenuitem'].helpers({
    getClass: function (color,id) {
        return prepMenusubitemClasses(color,id);
    }
});
Template['menuitem'].events({
    "click li.mm-item": function (event, template) {
        Session.set("active-menuitem-id",event.currentTarget.id);
        Session.set("active-menuitem-class",$(event.currentTarget).data().color);
        Session.set("active-submenuitem-id",null);
        FlowRouter.go($(event.currentTarget).data().route);
    }
});
Template['submenuitem'].events({
    "click li.mm-subitem": function (event, template) {
        Session.set("active-submenuitem-id",event.currentTarget.id);
        FlowRouter.go($(event.currentTarget).data().route);
    }
});

Template['menu'].rendered = function() {
    $("#menu").mmenu({extensions: ["widescreen","border-none"]}).on('click',
        'a[href^="#/"]',
        function() {
            closeMenu();
            return false;
        }
    );
    resizeSlideout();
}

