var inquirer = require("inquirer");
var chalk = require("chalk");
var Word = require("./Word");
var words = require("./words");

function Game() {
  var session = this;
  this.playgame = function() {
    this.guessesLeft = 10;
    this.newWord();
  };


}
module.exports = Game;