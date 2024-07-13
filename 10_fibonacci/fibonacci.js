const fibonacci = function(number) {
  if (number === 0 || +number === 0)
  {
    return 0;
  }
  if (number < 0)
  {
    return 'OOPS';
  }
  if (Number.isInteger(+number))
  {
    number = +number;
  }
  else {
    return 'OOPS';
  }
  let fibonacciList = [1, 1];
  for (let i = 2; i < number; i++)
  {
    fibonacciList[i] = fibonacciList[i-1] + fibonacciList[i-2];
  }
  return fibonacciList[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;
