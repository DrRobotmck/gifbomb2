
SearchView = Backbone.View.extend({
	el: "#searchoruser",
	template: _.template($("#search_template").html(),{}),

	initialize: function(){
		console.log("initialized bro");
		this.render();
	},

	render: function(){
		this.$el.html(this.template);
	},

	events: {
		"submit": "searchGifs",
		"click #sign_up": "signup"
	},
	// button navigating to sign up
	signup: function(){
		Backbone.navigate('signup', {trigger: true});
	},

	searchGifs: function(e){
		e.preventDefault();
		// empties out the list of gifs
		$("ul#gif").empty();
		// this.collection.destructo();
		this.collection.reset();

		// gets the search term from the page and makes an ajax request to giphy
		var term = this.$el.find("input[name='search']").val();
		$.getJSON("http://api.giphy.com/v1/gifs/search?q="+term+"&api_key=dc6zaTOxFJmzC&limit=100", this.results);
		console.log("going to results")
		this.$el.find("input[name='search']").reset;
	},

	results: function(response){
		console.log("in results");
		console.log(response)
		_.each(response.data, function(oneGif){
			console.log("added")
			allGifs.add({gif_url: oneGif.id, static_url: oneGif.images.fixed_height_still.url});
		})
			
	}
});
