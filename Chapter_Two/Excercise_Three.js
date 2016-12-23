/*
PROBLEM STATEMENT

Chess board

Write a program that creates a string that represents an 8 x 8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chess board. Passing this string to console.log should show something like this:

				 # # # #
				# # # # 
				 # # # #
				# # # # 
				 # # # # 
				# # # #
				 # # # # 
				# # # #
				 
				 

Solution by: Josh Latto
Date: 12/14/2016
*/

var main = function() {
	
	// Define the size variable
	var size = 8;

	// Create the two string we'll be using to construct our chessboard
	var odd  = " ";
	var even = "#"

	for (var counter = 0; counter < size - 1; counter++) {
		if (counter % 2 == 0) {
			odd  += "#";
			even += " ";
		} else {
			odd  += " ";
			even += "#";
		}
	}

	// Add newline characters at the end of each string
	odd  += "\n";
	even += "\n";

	var chessBoard = "";

	for (var counter = 0; counter < size; counter++) {
		
		if (counter % 2 == 0) {
			chessBoard += even;
		} else {
			chessBoard += odd;
		}

	}
	
	console.log(chessBoard);
}

main()
