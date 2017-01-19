/*
PROBLEM STATEMENT

We've seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to check whether it's divisable by two. Here's another way to define whether a positive whole number is even or odd:

* Zero is even
* One is odd
* For any other number N, its evenness is the same as N - 2. 

Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

Solution by: Josh Latto
Date: 1/18/2017
*/

var isEven = function(number) {

  number = Math.abs(number)

  if (number == 0) {
    return true;
  } 

  if (number == 1) {
    return false;
  }

  return isEven(number - 2);

}

// Tests

console.log("Test cases are 50, 75, -1, and -6 respectively")

console.log(isEven(50))

console.log(isEven(75))

console.log(isEven(-1))
  
console.log(isEven(-6))
