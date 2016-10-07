// Solution 1: Call function and input limit by hand within console
var sum = 0;

  var prob1 = function(limit) {
  	for(var i=0; i<limit; i++) {
  		if (i%3 === 0 || i%5 === 0) {
  			sum += i;
  		}
  	} return sum;
  }

prob1(1000);


// Solution 2: User input
var sum = 0;
var number = prompt("Enter limit");

  var prob1 = function(limit) {
  	for(var i=0; i<limit; i++) {
  		if (i%3 === 0 || i%5 === 0) {
  			sum += i;
  		}
  	} return sum;
  }

prob1(number);
console.log("Sum = " + sum)