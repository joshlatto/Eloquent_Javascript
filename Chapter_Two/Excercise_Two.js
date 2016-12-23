/*
PROBLEM STATEMENT

FizzBuzz

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz", for numbers that are divisble by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisble by only one of those). 

 

Solution by: Josh Latto
Date: 12/14/2016
*/

var main = function() {
	
	// Define the string that we will be print to the console
	// when the number is divisble by either 3 or 5
	var string = "";
	
	// Loop through the numbers 1 to 100
	for (var counter = 1; counter < 101; counter++) {
		if (counter % 3 != 0 && counter % 5 != 0) { 
			console.log(counter)
		} else if (counter % 3 == 0 && counter % 5 != 0) {
			console.log("Fizz")
		} else if (counter % 3 != 0 && counter % 5 == 0) { 
			console.log("Buzz")
		} else {
			console.log("FizzBuzz");
		}
	}
}

main()
