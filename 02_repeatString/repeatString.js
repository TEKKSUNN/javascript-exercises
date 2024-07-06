const repeatString = function(message, num) {
    if (num < 0)
    {
        return 'ERROR';
    }
    arr = [];
    for (let i = 0; i < num; i++)
    {
        arr.push(message);
    }
    return arr.join("");
};

// Do not edit below this line
module.exports = repeatString;
