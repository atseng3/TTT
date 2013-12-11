TTT.Views.Landing = Backbone.View.extend({
	template: JST["landing"],
	
	events: {
		"click button": "startGame",
		"click .page-header": "buildSearchString"
	},
	
	// buildSearchString: function (event) {
	// 	event.preventDefault();
	// 	// debugger
	// 	var theUrl
	// 	var xmlHttp = null;
	// 	
	// 	xmlHttp = new XMLHttpRequest();
	// 	xmlHttp.open("GET", "https://www.google.com", false);
	// 	xmlHttp.send(null);
	// 	return xmlHttp.responseText;
	// },
	
	startGame: function (event) {
		event.preventDefault();
		var size = parseInt($(event.currentTarget).attr("value"));
		// var payload = $(event.currentTarget).serializeJSON();
		// var size = parseInt(payload.game.size);
		if (isNaN(size)) {
			var inputBox = $(event.currentTarget.nextElementSibling);
			inputBox.toggleClass("input-box");
			var that = this;
			size = inputBox.bind('input', function(event){
				var value = $(event.target).val();
				if (that.checkInput(value) && value < 41 && value > 2) {
					TTTgame = new window.TicTacToe.Game(value);
					that.showGame();
				} 
			});
		}
		TTTgame = new window.TicTacToe.Game(size);
		this.showGame();
		// Backbone.history.navigate("#playGame", { trigger: true });
	},
	
	checkInput: function (value) {
		if (isNaN(value)) {
			console.log("please input a number");
			return false;
		}
		return true;
	},
	
	showGame: function () {
		var gameView = new TTT.Views.Game();
		this._swapView(gameView);
		
		gameView.render();
	},
	
	_swapView: function (newView) {
		if (this._prevView) {
			this._prevView.remove();
		}
		
		this._prevView = newView;
		$(".game-content").html(newView.render().$el);
	},
	
	render: function () {
		var renderedContent = this.template({
			title: "Welcome to Tic-Tac-Toe -- Remixed!"
		});
		this.$el.html(renderedContent);
		return this;
	}
});