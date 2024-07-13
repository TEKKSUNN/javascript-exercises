const findTheOldest = function(arrayKwarg) {
  return arrayKwarg
              .sort((personLast, personNext) => {
                personLastDeath = personLast.yearOfDeath === undefined ? (new Date()).getFullYear() : personLast.yearOfDeath;
                personNextDeath = personNext.yearOfDeath === undefined ? (new Date()).getFullYear() : personNext.yearOfDeath;
                return (personLastDeath - personLast.yearOfBirth) - (personNextDeath - personNext.yearOfBirth);
              })[arrayKwarg.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
