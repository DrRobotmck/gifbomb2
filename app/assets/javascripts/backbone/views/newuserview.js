var SignUp =Backbone.View.extend({
	el: "div#searchoruser",
	template: _.template($("script[id='new_user_template']").html()),

	initialize: function(){
		this.$el.empty();
		this.render();
	},
	render: function(){
		this.$el.html(this.template);
	},
	events: {
		"submit #new_user_form": "getParams"
	},
	getParams: function(e){
		e.preventDefault();
		var email = this.$el.find($("input[name='email']")).val()
		var password = this.$el.find($("input[name='password']")).val()
		var password_confirmation = this.$el.find($("input[name='password_confirmation']")).val()

		user = {
			email: email,
			password: password,
			password_confirmation: password_confirmation
		}

		console.log(user);
	}
}) 