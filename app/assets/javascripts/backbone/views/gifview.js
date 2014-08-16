var GifView = Backbone.View.extend({
  template: HandlebarsTemplates['gifs/gifTemplate'],
  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'remove', this.remove)
    this.render()
  },
  render: function() {
    var model = this.model.toJSON();
    this.$el.html(this.template(model));
    var clipboard = new ZeroClipboard(this.$('button'));
  }
})