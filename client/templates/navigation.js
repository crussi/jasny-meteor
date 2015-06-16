
formatId = function (data) {
    return (data && data._str) || data;
}
formatMenuItemClass = function (text) {
    return text.replace(/ /g,'').toLowerCase();
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
    getClass: function (text,id) {
        text = formatMenuItemClass(text);
        var active = (formatId(id) === Session.get("active-menuitem-id")) ? ' active' : '';
        return text + active;
    }
});
Template['menuitem'].events({
    "click li.mm-item": function (event, template) {
        console.log("li clicked id: " + event.currentTarget.id);
        Session.set("active-menuitem-id",event.currentTarget.id);
        Session.set("active-menuitem-class",formatMenuItemClass(event.currentTarget.outerText));
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
        var activeclass = Session.get("active-menuitem-class");
        return activeclass ? activeclass : '';
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