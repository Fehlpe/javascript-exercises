const palindromes = function (string) {
    let firstVersion = string.toLowerCase().replace(/[!?., ]/g, '')
    let secondVersion = string.toLowerCase().replace(/[!?., ]/g, '').split('').reverse().join('')
    return firstVersion == secondVersion ? true : false 
};

// Do not edit below this line
module.exports = palindromes;
