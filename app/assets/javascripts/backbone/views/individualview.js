IndividualView = Backbone.View.extend({
	el: "#gif",
	initialize: function(){
		this.listenTo(this.collection, "add", this.addIt);
	},
	addIt: function(giphy){
		var gifTainer = new GifView({model: giphy});
		this.$el.append(gifTainer.el)
	}
	
});