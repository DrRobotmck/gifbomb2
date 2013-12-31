var GifBomb = Backbone.Collection.extend({
	model: GifModel,
	url: "gifs"
});
var allGifs = new GifBomb();