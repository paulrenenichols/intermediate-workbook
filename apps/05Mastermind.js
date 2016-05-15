'use strict';

var assert = require('assert');
var colors = require('colors/safe');
var prompt = require('prompt');
prompt.start();

var board = [];
var solution = '';
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
    for (var i = 0; i < board.length; i++) {
        console.log(board[i])
    }
}

function generateSolution() {
    for (var i = 0; i < 4; i++) {
        var randomIndex = getRandomInt(0, letters.length);
        solution += letters[randomIndex];
    }
    solution = 'abcd';
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(solution, guess) {
    // your code here
    var solutionArray           = solution.split('');
    var guessArray              = guess.split('');
    var correctLetterLocations  = 0;
    var correctLetters          = 0;
    var index;

    for (index = 0; index < guessArray.length; index++) {
      if (guessArray[index] === solutionArray[index]) {
        correctLetterLocations++;
        solutionArray[index] = null;
      }
    }

    for (index = 0; index < guessArray.length; index++) {
      var targetIndex = solutionArray.indexOf(guessArray[index]);
      if (targetIndex > -1) {
        correctLetters++;
        solutionArray[targetIndex] = null;
      }
    }

    //Colors interfere with the unit tests
    return correctLetterLocations + '-' + correctLetters;
    // return colors.red(correctLetterLocations) + '-' + colors.white(correctLetters);
}

function mastermind(guess) {
    // your code here
    var hint;

    if (board.length < 10) {
      if (guess === solution) {
        return 'You guessed it!';
      }
      else {
        hint = generateHint(solution, guess);
        board.push(guess + ' ' + hint);
        return 'Guess again.';
      }
    }
    else {
      return 'You ran out of turns! The solution was ' + solution;
    }
}


function getPrompt() {
    prompt.get(['guess'], function (error, result) {
        console.log( mastermind(result['guess']) );
        printBoard();
        getPrompt();
    });
}

// Tests

if (typeof describe !== 'undefined') {

    describe('#mastermind()', function () {
        it('should register a guess and generate hints', function () {
            solution = 'abcd';
            mastermind('aabb');
            assert.equal(board.length, 1);
        });
        it('should be able to detect a win', function () {
            assert.equal(mastermind(solution), 'You guessed it!');
        });
    });

    describe('#generateHint()', function () {
        it('should generate hints', function () {
            assert.equal(generateHint('abcd', 'abdc'), '2-2');
        });
        it('should generate hints if solution has duplicates', function () {
            assert.equal(generateHint('abcd', 'aabb'), '1-1');
        });

    });

} else {

    generateSolution();
    getPrompt();
}
