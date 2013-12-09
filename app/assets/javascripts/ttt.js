window.TTT = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		TTTgame = new window.TicTacToe.Game();
		TTTgame.run();
		new TTT.AppRouter();
		Backbone.history.start();
  }
};

$(document).ready(function(){
  TTT.initialize();
});
