var NewUser = Backbone.Model.extend({
	url: "users",
	addToDatabase: function(){
		// account = this.toJSON();
		this.save({
			success: function(e){
				console.log(e);
				console.log("got it");
			}
		});
		window.location.href = window.location.origin;
	},
	signInUser: function(){
		this.save({
			success: function(user){
				console.log(user);
				$.ajax({
					type: "POST",
					url: "/session",
					data: user,
					success: function(e){
						console.log(e);
					}
				});
			},
			error: function(user){
				$.ajax({
					type: "POST",
					url: "/session",
					data: user,
					success: function(e){
						console.log(e);
					}
				});
			}
		});
	}
})