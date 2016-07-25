'use strict';

var assert = require('assert');

// ****
// Basic Data Types
// ****

// Problem 0:
// To start out we are declaring a variable named myUndefined
// Note that we are not assigning a value, so it is undefined.

var myUndefined;

// Problem 1:
// Let's create a new variable namde myNull and give it the value null.
//
// What is the difference between null and undefined?

var myNull = null;

// Problem 2:
// Let's create a new variable named myTrue and give it the value true.

var myTrue = true;

// Problem 3:
// Let's create a new variable named myFalse and give it the value false.

var myFalse = false;

// Problem 4:
// Let's create a new variable named myNumber. Assign it a number.

var myNumber = 8;

// Problem 5:
// Let's create a new variable named myString. Assign it a string.

var myString = 'bob';

// ****
// Boolean Operators
// ****

// Problem 6:
// What is the value of true && true

var trueAndTrue = true;

// Problem 7:
// What is the value of false && true

var falseAndTrue = false;

// Problem 8:
// What is the value of true && false

var trueAndFalse = false;

// Problem 9:
// What is the value of false && false

var falseAndFalse = false;

// Problem 10:
// What is the value of true || true

var trueOrTrue = true;

// Problem 11:
// What is the value of false || true

var falseOrTrue = true;

// Problem 12:
// What is the value of true || false

var trueOrFalse = true;

// Problem 13:
// What is the value of false || false

var falseOrFalse = false;

// Problem 14:
// What is the value of !false

var notFalse = true;

// Problem 15:
// What is the value of !true

var notTrue = false;

// Problem 16:
// What is the value of !!true

var notNotTrue = true;

// ****
// Comparison Operators
// ****

// Problem 17
// What is the value of 4 === 4
var fourEqualTofour = true;

// Problem 18:
// What is the value of 4 !== 4
var fourNotEqualTofour = false;

// Problem 19:
// What is the value of -3 === 10
var negativeThreeEqualToTen = false;

// Problem 20:
// What is the value of -3 < 10
var negativeThreeLessThanTen = true;

// Problem 21:
// What is the value of -3 <= 10
var negativeThreeLessThanOrEqualToTen = true;

// Problem 22:
// What is the value of -3 > 10
var negativeThreeGreaterThanTen = false;

// Problem 23:
// What is the value of -3 >= 10
var negativeThreeGreaterThanOrEqualToTen = false;

describe('Lesson 1 Homework', function () {

  describe('Data Type Problems', function () {
    describe('Problem 0: undefined variable myUndefined', function () {
      it('should be undefined', function () {
          assert.equal(typeof myUndefined, 'undefined');
      });
    });

    describe('Problem 1: null variable myNull', function () {
      it('should be null', function () {
          assert.equal(myNull, null);
      });
    });

    describe('Problem 2: true variable myTrue', function () {
      it('should be true', function () {
          assert.equal(myTrue, true);
      });
    });

    describe('Problem 3: false variable myFalse', function () {
      it('should be false', function () {
          assert.equal(myFalse, false);
      });
    });

    describe('Problem 4: number variable myNumber', function () {
      it('should be a number', function () {
          assert.equal(typeof myNumber, 'number');
      });
    });

    describe('Problem 5: string variable myString', function () {
      it('should be a string', function () {
          assert.equal(typeof myString, 'string');
      });
    });
  });

  describe('Boolean Operators', function () {
    describe('Problem 6: true && true', function () {
      it('should be true', function () {
          assert.equal(trueAndTrue, true && true);
      });
    });

    describe('Problem 7: false && true', function () {
      it('should be false', function () {
          assert.equal(falseAndTrue, false && true);
      });
    });

    describe('Problem 8: true && false', function () {
      it('should be false', function () {
          assert.equal(trueAndFalse, true && false);
      });
    });

    describe('Problem 9: false && false', function () {
      it('should be false', function () {
          assert.equal(falseAndFalse, false && false);
      });
    });

    describe('Problem 10: true || true', function () {
      it('should be true', function () {
          assert.equal(trueOrTrue, true || true);
      });
    });

    describe('Problem 11: false || true', function () {
      it('should be true', function () {
          assert.equal(falseOrTrue, false || true);
      });
    });

    describe('Problem 12: true || false', function () {
      it('should be true', function () {
          assert.equal(trueOrFalse, true || false);
      });
    });

    describe('Problem 13: false || false', function () {
      it('should be false', function () {
          assert.equal(falseOrFalse, false || false);
      });
    });

    describe('Problem 14: !false', function () {
      it('should be true', function () {
          assert.equal(notFalse, !false);
      });
    });

    describe('Problem 15: !true', function () {
      it('should be false', function () {
          assert.equal(notTrue, !true);
      });
    });

    describe('Problem 16: !!true', function () {
      it('should be true', function () {
          assert.equal(notNotTrue, !!true);
      });
    });
  });

  describe('Comparison Operators', function () {
    describe('Problem 17: 4 === 4', function () {
      it('should be true', function () {
          assert.equal(fourEqualTofour, 4 === 4);
      });
    });

    describe('Problem 18: 4 !== 4', function () {
      it('should be false', function () {
          assert.equal(fourNotEqualTofour, 4 !== 4);
      });
    });

    describe('Problem 19: -3 === 10', function () {
      it('should be false', function () {
          assert.equal(negativeThreeEqualToTen, -3 === 10);
      });
    });

    describe('Problem 20: -3 < 10', function () {
      it('should be true', function () {
          assert.equal(negativeThreeLessThanTen, -3 < 10);
      });
    });

    describe('Problem 21: -3 <= 10', function () {
      it('should be true', function () {
          assert.equal(negativeThreeLessThanOrEqualToTen, -3 <= 10);
      });
    });

    describe('Problem 22: -3 > 10', function () {
      it('should be false', function () {
          assert.equal(negativeThreeGreaterThanTen, -3 > 10);
      });
    });

    describe('Problem 23: -3 >= 10', function () {
      it('should be false', function () {
          assert.equal(negativeThreeGreaterThanOrEqualToTen, -3 >= 10);
      });
    });
  });

});
