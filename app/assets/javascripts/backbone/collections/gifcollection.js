var GifBomb = Backbone.Collection.extend({
	model: GifModel,
	localStorage: new Backbone.LocalStorage("gifs-backbone")
});
