Router = Backbone.Router.extend({
	routes: {
		"":"initializer",
		"signup":"newUser",
		"signin":"signIn"
	},
	initializer: function(){
		allGifs = new GifBomb();
		search = new SearchView({collection: allGifs});
		gif_view = new IndividualView({collection: allGifs});
	},
	newUser: function(){
		signUp = new SignUp();
	},
	signIn: function(){
		signIn = new SignIn();
	}
})

// on navigation away from the main page, delete all errant models