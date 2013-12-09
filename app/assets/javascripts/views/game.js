TTT.Views.Game = Backbone.View.extend({
	template: JST["game"],
	
	events: {
		"click .game": "makeMove"
	},
	
	makeMove: function (event) {
		event.preventDefault();
		var currentDiv = $(event.target);
		var row = parseInt(currentDiv.attr('data-row'));
		var col = parseInt(currentDiv.attr('data-col'));
		// debugger
		if (TTTgame.board.validMove([row, col])) {
			currentDiv.html(TTTgame.currentMark());
		}
		TTTgame.board.makeMove([row, col]);
	},
	
	render: function () {
		var renderedContent = this.template({
			title: "Welcome to Tic-Tac-Toe Remixed"
		});
		this.$el.html(renderedContent);
		return this;
	}
});