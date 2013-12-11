TTT.Views.Input = Backbone.View.extend({
	template: JST["input"],
	
	render: function () {
		var renderedContent = this.template();
		this.$el.html(renderedContent);
		return this;
	}
});