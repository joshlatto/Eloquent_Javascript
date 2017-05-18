/*
PROBLEM STATEMENT

Minimum

The previous chapter introduced the standard function Math.min that returns its smallest argument. We can do that ourselves now. Write a function "min" that takes two arguments and returns their minimum. 

Solution by: Josh Latto
Date: 12/23/2016
*/

var my_min = function(a, b) {
	
	// Check if a is the minimum
	if (a < b) { 
		console.log(a);
	} else { 
		console.log(b);
	};

}

my_min(4, 10);

my_min(4, 4);

my_min(7, 3);

my_min(0, 10);

my_min(0, -10);
