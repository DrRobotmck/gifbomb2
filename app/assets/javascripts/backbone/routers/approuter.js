Router = Backbone.Router.extend({
	routes: {
		"signup":"newUser"
	},
	newUser: function(){
		signUp = new SignUp();
	}
})