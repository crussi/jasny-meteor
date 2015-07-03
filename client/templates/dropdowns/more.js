
Template['moredropdown'].events({
    "click li": function (event, template) {
        event.preventDefault();
        handleDdMenuClick(event.currentTarget.id);
    }
});

handleDdMenuClick = function(id) {
    var a = $('#' + id + ' a:first-of-type');
    var action = $(a).data("action");
    //var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
    var fullscreenEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled;
    //id = $(target).attr('id');
    switch(action) {
        case 'fullscreen':
            var isFullScreen = document.fullScreen ||
                document.mozFullScreen ||
                document.webkitIsFullScreen;
            if (!isFullScreen) {
                launchIntoFullscreen(document.documentElement);
            } else {
                exitFullscreen(document.documentElement);
            }

            break;
        case 'clear-localstorage':
            console.log(action);
            break;
        case 'clear-state':
            console.log(action);
            renderDashboard();
            break;
        case 'privacy':
            console.log(action);
            break;
        case 'settings':
            FlowRouter.go('/settings/general');
            break;
        default:
            console.log('no match');
    }
}


