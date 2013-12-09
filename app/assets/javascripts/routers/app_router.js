TTT.AppRouter = Backbone.Router.extend({
	routes: {
		"": "showGame"
	},
	
	showGame: function () {
		var gameView = new TTT.Views.Game({
			
		});
		this._swapView(gameView);
		
		gameView.render();
	},
	
	_swapView: function (newView) {
		if (this._prevView) {
			this._prevView.remove();
		}
		
		this._prevView = newView;
		$(".content").html(newView.render().$el);
	}
});