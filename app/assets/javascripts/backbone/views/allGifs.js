var AllGifs = Backbone.View.extend({
  el: '#gif-container',
  initialize: function() {
    this.listenTo(this.collection, 'change', this.addOne);
  },
  addOne: function(gifModel) {
    var gif = new GifView({model: gifModel});
    this.$el.append(gif.el);
  }
});