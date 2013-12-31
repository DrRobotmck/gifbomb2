
GifView = Backbone.View.extend({
	tagName: "li",
	template: _.template($("script[type='text/html']").html()),
	initialize: function(){
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
		this.template = _.template('<h6 class="clicker" id="<%= this.cid %>">right-click for link</h6><img class="indigif"src="<%=gif_url%>"><button id="favorite" class="tiny round">Favorite</button>');
		this.render();
	},
	changeBack: function(){
		this.template = _.template($("script[type='text/html']").html());
		this.render();
	},
	caption: function(){
		$("h6#"+this.cid).html("click me").fadeIn("slow");
	}
});
