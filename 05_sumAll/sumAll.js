const sumAll = function(firstNumber, secondNumber) {
    let sum = 0;
    if (typeof firstNumber != "number" || typeof secondNumber != "number" ||
    firstNumber < 0 || secondNumber < 0)
    {
        return 'ERROR';
    }
    if (firstNumber < secondNumber)
    {
        for (let i = firstNumber; i <= secondNumber; i++)
        {
            sum += i;
        }
        return sum;
    }
    if (firstNumber === secondNumber)
    {
        return firstNumber + secondNumber;
    }
    for (let i = firstNumber; i >= secondNumber; i--)
    {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
