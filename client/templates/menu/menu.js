
closeMenu = function () {
    if ($("#menu").hasClass("mm-current")) {
        $("#menu").removeClass("mm-current");
        $("#nav-auth").removeClass("mm-opened");
        $("#nav-auth").addClass("mm-closed");
        $("html").removeClass("mm-opened").removeClass("mm-opening");
    }
}

Template['layoutmenu'].helpers({
    isReady: function(sub){
        if(sub){
            return FlowRouter.subsReady(sub);
        } else {
            return FlowRouter.subsReady();
        }
    }
});

Template['menu'].helpers({
    menuitems: function () {
        return MenuItems.find({});
    }
});

Template['menuitem'].helpers({
    getClass: function () {
        return menuHelper.isActive(this) ? this.color + "-500" : "";
    }
});
Template['submenuitem'].helpers({
    getClass: function () {
        return menuHelper.isActive(this) ? this.color + "-500" : "";
    }
});

function handleMenuClick (mnu) {
    //menuHelper.setState(mnu);
    if (menuHelper.hasRoute(mnu)) {
        FlowRouter.go(mnu.route);
    } else {
        menuHelper.setState(mnu);
    }
}

Template['menuitem'].events({
    "click li.mm-item": function (event, template) {
        handleMenuClick(this);
    }
});
Template['submenuitem'].events({
    "click li.mm-item": function (event, template) {
        handleMenuClick(this);
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

