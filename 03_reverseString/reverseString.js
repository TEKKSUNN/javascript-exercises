const reverseString = function(strng) {
    newString = [];
    for (let i = strng.length - 1, j = 0; i >= 0; i--, j++)
    {
        newString[j] = strng[i];
    }
    return newString.join("");
};

// Do not edit below this line
module.exports = reverseString;
