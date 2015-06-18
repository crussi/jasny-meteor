
formatId = function (data) {
    return (data && data._str) || data;
}

prepNavbarClasses = function () {
    var bsclasses = 'navbar navbar-inverse navbar-default navbar-fixed-top ';
    var activeclass = Session.get("active-menuitem-class");
    return bsclasses + activeclass ? activeclass + '-500-bg' : '';
}


//This helper strips off ObjectID from document id
Template.registerHelper('formatId', function(data) {
    return formatId(data);
});

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

