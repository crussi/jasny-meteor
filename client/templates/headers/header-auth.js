
formatId = function (data) {
    return (data && data._str) || data;
}

prepNavbarClasses = function (hdrtype) {
    var bsclasses = 'navbar navbar-fixed-top ';
    var activeclass = Session.getJSON('activemenu.color') || 'blue';
    var weight = hdrtype === 'logo' ? '700' : '500';
    //console.log('prepNavbarClasses ' + Session.getJSON('activemenu.color'));
    return bsclasses + activeclass + '-' + weight + '-bg';
}


//This helper strips off ObjectID from document id
Template.registerHelper('formatId', function(data) {
    return formatId(data);
});

Template['logo'].events({
    "click .navbar-toggle": function (e) {
        e.preventDefault();
        navbarToggle();
    }
});

Template['headerauth'].events({
    "click .navbar-toggle": function (e) {
        e.preventDefault();
        navbarToggle();
    }
});
Template['headerauth'].helpers({
    getClass: function () {
        return prepNavbarClasses('headerauth');
    }
});
Template['logo'].helpers({
    getClass: function () {
        return prepNavbarClasses('logo');
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

