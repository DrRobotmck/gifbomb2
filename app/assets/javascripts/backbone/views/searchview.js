
SearchView = Backbone.View.extend({
	el: "form",

	events: {
		"submit": "searchGifs"
	},
	searchGifs: function(e){
		e.preventDefault();
		$("ul#gif").empty();
		var term = this.$el.find("input[name='search']").val();
		$.getJSON("http://api.giphy.com/v1/gifs/search?q="+term+"&api_key=dc6zaTOxFJmzC&limit=40", this.results);
		console.log("going to results")
		this.$el.find("input[name='search']").reset;
		},
	results: function(response){
		console.log("in results");
		_.each(response.data, function(oneGif){
			console.log("added")
			allGifs.add({gif_url: oneGif.images.fixed_height.url, static_url: oneGif.images.fixed_height_still.url});
		})
			
	}
});
