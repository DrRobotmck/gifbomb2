
GifView = Backbone.View.extend({
	tagName: "li",
	template: _.template($("#gif_template").html()),
	initialize: function(){
		// listens to a router event and removes the views
		this.listenTo(allGifs,"reset",this.remove);
		// renders a gifView
		this.render();
	},
	render: function(){
		var compiledTemplate = this.template(this.model.toJSON());
		this.$el.html(compiledTemplate);
	},
	events: {
		"mouseleave img": "changeBack",
		"click img": "changeSrc",
		"mouseenter img": "caption"
		
	},
	changeSrc: function(){
		this.template = _.template('<h6 class="clicker" id="<%= this.cid %>">right-click for link</h6><img class="indigif"src="http://media.giphy.com/media/<%=gif_url%>/giphy.gif"><button id="favorite" class="tiny round">Favorite</button>');
		this.render();
	},
	changeBack: function(){
		this.template = _.template($("#gif_template").html());
		this.render();
	},
	caption: function(){
		$("h6#"+this.cid).html("click me").fadeIn("slow");
	}
});
