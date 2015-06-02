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
}

Template['header'].events({
    "click .navbar-toggle": function () {
        navbarToggle();
    }
});

function navbarToggle () {
    $("#menu").toggleClass("mm-current").toggleClass("mm-opened");
    $("html").toggleClass("mm-widescreen").toggleClass("mm-opened").toggleClass("mm-opening");
}

function closeMenu () {
    if ($("#menu").hasClass("mm-current")) {
        $("#menu").removeClass("mm-current");
        $("html").removeClass("mm-opened").removeClass("mm-opening");
    }
}