var GifBomb = Backbone.Collection.extend({
	model: GifModel,
	url: "gifs",

	// destructo: function(){
	// 	_.invoke(this.models,"destroy")
	// 	console.log(this.models);
	// 	return false;
	// }
});