


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

Template['menu'].rendered = function() {
    $("#menu").mmenu({extensions: ["widescreen"]}).on('click',
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