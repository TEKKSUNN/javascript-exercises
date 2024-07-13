const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numsArray) {
	return numsArray.reduce((total, currentNum) => total += currentNum, 0);
};

const multiply = function(numsArray) {
  return numsArray.reduce((total, currentNum) => total *= currentNum, 1);
};

const power = function(num, toPower) {
	// return num ** toPower; - Easy way, but I ain't this weak
  return ((new Array(toPower)).fill(num)).reduce((total, currentNum) => total *= currentNum, 1); // Haha, weaklings, i can do this
};

const factorial = function(num) {
  let finalNum = 1;
  for (let i = 1; i <= num; i++)
  {
    finalNum *= i;
  }
  return finalNum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
