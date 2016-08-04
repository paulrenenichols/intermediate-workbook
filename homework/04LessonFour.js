'use strict';

var assert = require('assert');

// ****
// Popular Array Methods
//
// Refer to your textbook, MDN, and other good documentation online.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// ****

// DO NOT MODIFY
var numberArray = [1, 2, 3, 4, 5];

// Problem 1:
// Show what numberArray would look like if we called numberArray.pop()
var numberArrayAfterPop = [1, 2, 3, 4];

// Problem 2:
// Show what numberArray would look like if we called numberArray.shift()
var numberArrayAfterShift = [2, 3, 4, 5];

// Problem 3:
// Show what numberArray would look like if we called numberArray.push(6)
var numberArrayAfterPush = [1, 2, 3, 4, 5, 6];

// Problem 4:
// Show what numberArray would look like if we called numberArray.unshift(0)
var numberArrayAfterUnshift = [0, 1, 2, 3, 4, 5];

// Problem 5:
// Use pop() and shift to make the array bravestWarriors look like this:
// ['Danny', 'Chris', 'Beth', 'Wallow']
var bravestWarriors = ['Catbug', 'Danny', 'Chris', 'Beth', 'Wallow', 'Impossibear'];
bravestWarriors.pop();
bravestWarriors.shift();

// Problem 6:
// Use push() and unshift to make the array fruit look like this:
// ['banana', 'kiwi', 'apple', 'orange', 'grapes', 'mango']
var fruit = ['kiwi', 'apple', 'orange', 'grapes'];
fruit.push('mango');
fruit.unshift('banana');

// ****
// Concept Checkpoint
//
// Write your answer in comments
//
// What is a function? How do you define a function in Javascript?
//
// Your Answer Goes Here:
//
//
// What is a return value?
//
// Your Answer Goes Here:
//
//


// ****
// Tests
// DO NOT MODIFY CODE BELOW!!!!!
// ****

describe('Lesson 4 Homework', function () {

  describe('Popular Array Methods', function () {

    var newNumberArray;
    beforeEach(function () {
      newNumberArray = numberArray.map(function (number) { return number });
    });

    describe('Problem 1: numberArray after pop()', function () {
      it('should be missing the last element', function () {
        newNumberArray.pop();
        assert.deepStrictEqual(numberArrayAfterPop, newNumberArray);
      });
    });

    describe('Problem 2: numberArray after shift()', function () {
      it('should be missing the first element', function () {
        newNumberArray.shift();
        assert.deepStrictEqual(numberArrayAfterShift, newNumberArray);
      });
    });

    describe('Problem 3: numberArray after push(6)', function () {
      it('should be the same array with 6 added at the end', function () {
        newNumberArray.push(6);
        assert.deepStrictEqual(numberArrayAfterPush, newNumberArray);
      });
    });

    describe('Problem 4: numberArray after unshift(0)', function () {
      it('should be the same array with zero added at the beggining', function () {
        newNumberArray.unshift(0);
        assert.deepStrictEqual(numberArrayAfterUnshift, newNumberArray);
      });
    });

    describe('Problem 5: bravestWarriors pop() and shift()', function () {
      it('should be missing Impossibear and Catbug', function () {
        assert.deepStrictEqual(bravestWarriors, ['Danny', 'Chris', 'Beth', 'Wallow']);
      });
    });

    describe('Problem 6: fruit push() and unshift()', function () {
      it('should have added mango and banana', function () {
        assert.deepStrictEqual(fruit, ['banana', 'kiwi', 'apple', 'orange', 'grapes', 'mango']);
      });
    });
  });

});
