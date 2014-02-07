var SignIn = Backbone.View.extend({
	el: "div#searchoruser",
	template: _.template($("script[id='sign_in_template']").html()),

	initialize: function(){
		this.render();
	},
	render: function(){
		this.$el.html(this.template);
	},
	events: {
		"submit #signin_form": "getUser"
	},
	getUser: function(e){
		e.preventDefault();
		var username = this.$el.find($("#signin-email")).val();
		var password = this.$el.find($("#signin-password")).val();
		var user = {email: username,
								password: password
							 }
		var signin = new NewUser({user:user});
		signin.signInUser()
	}
})