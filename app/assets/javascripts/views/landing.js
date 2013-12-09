TTT.Views.Landing = Backbone.View.extend({
	template: JST["landing"],
	
	events: {
		"submit .game-size": "startGame"
	},
	
	startGame: function (event) {
		event.preventDefault();
		var payload = $(event.currentTarget).serializeJSON();
		var size = parseInt(payload.game.size);
		TTTgame = new window.TicTacToe.Game(size);
		Backbone.history.navigate("#playGame", { trigger: true });
	},
	
	render: function () {
		var renderedContent = this.template({
			title: "Welcome to Tic-Tac-Toe -- Remixed!"
		});
		this.$el.html(renderedContent);
		return this;
	}
});