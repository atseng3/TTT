window.TTT = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		new TTT.AppRouter();
		Backbone.history.start();
  }
};

$(document).ready(function(){
  TTT.initialize();
});
