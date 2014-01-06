var NewUser = Backbone.Model.extend({
	url: "users",
	addToDatabase: function(){
		// account = this.toJSON();
		this.save({success: function(){
			console.log("got it")
		}})
	}
})