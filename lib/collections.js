MenuItems = new Mongo.Collection("menuitems");

MenuItems.helpers({
    getParamsById: function(id) {
        return MenuItems.find(
            { $or: [
                {key:id},
                {subitems: { $elemMatch: { key:id}}}
            ]},{color:1, route:1, key:1, _id:0});
    },
    getParamsByRoute: function(route) {
        return MenuItems.find(
            { $or: [
                {route:"/inbox"},
                {subitems: { $elemMatch: { route: "/inbox"}}}
            ]},{color:1, route:1, key:1, _id:0})
    }
});