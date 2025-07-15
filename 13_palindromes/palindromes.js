const palindromes = function (str) {
    const match = str.toLowerCase().match(/[a-z0-9]/g).join('');
    const reverse = match.split('').reverse().join('');

    return match === reverse;
};

// Do not edit below this line
module.exports = palindromes;
