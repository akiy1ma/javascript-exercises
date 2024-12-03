const palindromes = function (str) {
    function isLetter(char) {
        return /^[a-zA-Z1-9]$/.test(char);
    };

    str = str.toLowerCase();
    str = str.split('')
    str = str.filter(isLetter);
    for (i = 0; i < str.length; i++) {
        if (str[i] != str[str.length-1-i]) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
