const palindromes = function (stringValue) {
  const ALLOWED_CHARACTERS = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let newString = stringValue.split(' ');
  newString = newString.join('');
  newString = newString.toLowerCase();
  newString = (newString.split('')).filter((item) => ALLOWED_CHARACTERS.includes(item));
  newString = newString.join('');
  reversedNewString = [];
  for (let i = newString.length - 1, j = 0; i >= 0; i--, j++)
  {
    reversedNewString[j] = newString[i];
  }
  reversedNewString = reversedNewString.join('');
  return newString == reversedNewString;
};

// Do not edit below this line
module.exports = palindromes;
