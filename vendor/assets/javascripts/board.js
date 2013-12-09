(function() {
  var TicTacToe = window.TicTacToe = (window.TicTacToe || {});

  TicTacToe.Board = function(game, size) {
		this.size = size;
    this.game = game;
    this.grid = new Array(size);
    for (var i = 0; i < size; i++) {
      this.grid[i] = new Array(size);
    }
		this.win_combos = this.generateCombos();
  }
	
	TicTacToe.Board.prototype.generateCombos = function() {
		combos = [];
		var diag = [];
		var diag2 = [];
		for (var i = 0; i < this.size; i++) {
			diag.push([i, i]);
			diag2.push([this.size - 1 - i, i]);
			var col = [];
			var row = [];
			for (var j = 0; j < this.size; j++) {
				col.push([i, j]);
				row.push([j, i]);
			}
			combos.push(col);
			combos.push(row);
		}
		combos.push(diag);
		combos.push(diag2);
		return combos;
	}

  TicTacToe.Board.prototype.makeMove = function(move) {
    if (this.validMove(move)) {
      this.grid[move[0]][move[1]] = (this.game.currentPlayer == 0) ? "X" : "O";
      this.game.switchPlayer();
    } else {
      alert("Invalid move!");
    }
    this.game.run();
  }

  TicTacToe.Board.prototype.validMove = function(move) {
    if (move[0] < 0 || move[0] > (this.size - 1) || move[1] < 0 || move[1] > (this.size - 1)) {
      return false;
    }
    return !this.grid[move[0]][move[1]];
  }

  TicTacToe.Board.prototype.over = function() {
    return this.tied() || this.won();
  }

  TicTacToe.Board.prototype.tied = function() {
    for (var row = 0; row < this.size; row++) {
      for (var col = 0; col < this.size; col++) {
        if (this.grid[row][col] === undefined) {
          return false;
        }
      }
    }
    return true;
  }

  TicTacToe.Board.prototype.won = function() {
    for (var i = 0; i < this.win_combos.length; i++) {
			var combo = this.win_combos[i];
			var count = {"X": 0, "O": 0};
			for (var j = 0; j < combo.length; j++) {
				var squareVal = this.grid[combo[j][0]][combo[j][1]];
				count[squareVal] += 1;
			}
			if (count.X === this.size || count.O === this.size) {
				return true;
			}
    }
		
    return false;
  }
})();