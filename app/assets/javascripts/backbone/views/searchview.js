var SearchView = Backbone.View.extend({
  el: '#search',
  events: {
    'click #explode': 'search'
  },
  initialize: function(){
  },
  search: function() {
    var query = escape(this.$('input').val());
    this.collection.reset();
    var request = $.get('http://api.giphy.com/v1/gifs/search?q='+query+'&api_key=dc6zaTOxFJmzC&limit=24');
    request.done(function(apiResponse){
      _.each(apiResponse.data, function(gif){
        this.collection.create({gif_url: gif.images.fixed_height.url});
      },this);
    }.bind(this));
  }
})