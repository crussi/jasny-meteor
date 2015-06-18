
formatId = function (data) {
    return (data && data._str) || data;
}

prepNavbarClasses = function () {
    var bsclasses = 'navbar navbar-inverse navbar-default navbar-fixed-top ';
    var activeclass = Session.get("active-menuitem-class");
    return bsclasses + activeclass ? activeclass + '-500-bg' : '';
}

prepMenuitemClasses = function (color,id) {
    var active = (id == Session.get("active-menuitem-id")) ? color + '-500 ' : '';
    return "mm-item " + active;
}
prepMenusubitemClasses = function (color,id) {
    var active = (id == Session.get("active-submenuitem-id")) ? color + '-500 ' : '';
    return "mm-subitem " + active;
}
//This helper strips off ObjectID from document id
Template.registerHelper('formatId', function(data) {
    return formatId(data);
});

Template['header-unauth'].events({
    'click #signin' : function(e, t) {
        console.log('signin');
        FlowRouter.go('/signin');
    },
    'click #signup' : function(e, t) {
        console.log('signup');
        FlowRouter.go('/signup');

    }
});

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

Template['logo'].events({
    "click .navbar-toggle": function () {
        navbarToggle();
    }
});

Template['header-auth'].events({
    "click .navbar-toggle": function () {
        navbarToggle();
    }
});
Template['header-auth'].helpers({
    getClass: function () {
        return prepNavbarClasses();
    }
});
Template['logo'].helpers({
    getClass: function () {
        return prepNavbarClasses();
    }
});

navbarToggle = function () {
    $("#menu").toggleClass("mm-current").toggleClass("mm-opened");
    var navauth = $("#nav-auth");
    if (navauth.hasClass("mm-opened")) {
        navauth.removeClass("mm-opened").addClass("mm-closed");
    } else {
        navauth.removeClass("mm-closed").addClass("mm-opened");
    }
    $("html").toggleClass("mm-widescreen").toggleClass("mm-opened").toggleClass("mm-opening");
}

closeMenu = function () {
    if ($("#menu").hasClass("mm-current")) {
        $("#menu").removeClass("mm-current");
        $("#nav-auth").removeClass("mm-opened");
        $("#nav-auth").addClass("mm-closed");
        $("html").removeClass("mm-opened").removeClass("mm-opening");
    }
}