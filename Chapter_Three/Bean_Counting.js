/*
PROBLEM STATEMENT

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase "B" characters
are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counter. 

Rewrite countBs to make use of this new function. 

Solution by: Josh Latto
Date: 1/18/2017
*/

var countBs = function(string) {

  var counter = 0;

  for (var i = 0; i < string.length; i++) {
    if (string[i] == "B") {
      counter++;
    }
  }

  return counter;

}

var countChars = function(string, char) {

  var counter = 0;

  for (var i = 0; i < string.length; i++) {
    if(string[i] == char) {
      counter++;
    }
  }

  return counter;

}

var newCountBs = function(string) {

  return countChars(string, "B")

}

// Tests

console.log("Result for countBs('This is a test. I wonder if it will get it right?')")

console.log(countBs('This is a test. I wonder if it will get it right?'))

console.log("Running countBs('Brrrrrrr')")

console.log(countBs('Brrrrrrr'))

console.log("Running countBs('BBBBBrrrrr')")

console.log(countBs('BBBBBrrrrr'));

console.log("Running countBs('Bbbrrrrr')")

console.log(countBs('Bbbrrrrr'))

console.log("Results for countChars('This is a test', 't')")

console.log(countChars('This is a test', 't'))

console.log("Results for countChars('Will it work with another letter?', 'w')")

console.log(countChars('Will it work with another letter?', 'w'))


console.log("Result for newCountBs('This is a test. I wonder if it will get it right?')")

console.log(newCountBs('This is a test. I wonder if it will get it right?'))

console.log("Running newCountBs('Brrrrrrr')")

console.log(newCountBs('Brrrrrrr'))

console.log("Running newCountBs('BBBBBrrrrr')")

console.log(newCountBs('BBBBBrrrrr'));

console.log("Running newCountBs('Bbbrrrrr')")

console.log(newCountBs('Bbbrrrrr'))

