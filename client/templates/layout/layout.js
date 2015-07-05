
//TODO: move this to utility file.  Due to namespacing, variables w/o var
//TODO: are available anywhere in the app (see: http://docs.meteor.com/#/full/namespacing)

    hideSideMenu = function(){
        var winWidth = $(window).width();
        $('.mm-slideout').width(winWidth).css('margin-left',0);
        closeMenu();
    }

    resizeSlideout = function() {
        if (!Meteor.user()) {return;}
        var winWidth = $(window).width();
        var defWidth =  0.30 * winWidth;
        var mnuWidth = $('#menu').width();
        var diff = 0;
        //TODO: make 750 a global variable
        if (winWidth < 750) {
            //$('.mm-slideout').width(winWidth).css('margin-left',0);
            //closeMenu();
            hideSideMenu();
            return;
        }
        mnuWidth = mnuWidth || defWidth;
        if (mnuWidth) {
            diff = winWidth - mnuWidth;
            $('.mm-slideout').width(diff).css('margin-left',mnuWidth);
        }
    }

    Meteor.startup(function () {
        $( document ).ready(function() {
            $(window).resize(function(){
                resizeSlideout();
            });
            //$(function() {
            //    console.log('material design init');
            //    console.log($.material.init);
            //    $.material.init();
            //    $.material.ripples();
            //});
        });
    });

    Template['layout-auth'].onRendered(function () {
        $(function() {
            $.material.init();
            //$.material.ripples();
            //$.material.ripples();
            //$.material.checkbox();
            //$.material.radio();
        });
    });

    Template['layout-unauth'].onRendered(function () {
        $(function() {
            $.material.init();
            //$.material.ripples();
            //$.material.ripples();
            //$.material.checkbox();
            //$.material.radio();
        });
    });











