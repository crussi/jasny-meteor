if (Meteor.isClient) {
  Template.menu.helpers({
    //menuitems: function () {
    //  return MenuItems.find({});
    //}
  });
  Template.menu.rendered = function() {
    $(document).ready(function(){
        $("#menu").mmenu({extensions: ["widescreen"]}).on('click',
            'a[href^="#/"]',
            function() {
                closeMenu();
                return false;
            }
        );

    });


  }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
