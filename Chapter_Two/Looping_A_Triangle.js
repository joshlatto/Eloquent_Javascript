/*
PROBLEM STATEMENT

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

Solution by: Josh Latto
Date: 12/14/2016
*/

var main = function() {
	
	// Define the string that we will be printing
	var string = "#";
	
	// Loop to print the string seven times
	// Add a "#" each time so as to form the triangle
	for (var counter = 0; counter < 7; counter++) {

		console.log(string);
		string += "#";
	}
}

main()
