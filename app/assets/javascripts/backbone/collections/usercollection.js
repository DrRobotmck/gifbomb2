var Users = Backbone.Collection.extend({
	model: NewUser,
	url: "users"
})

var users = new Users();