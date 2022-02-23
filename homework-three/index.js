
//Task 1. GetMaxDigit function
function getMaxDigit(number) {
    number = number.toString();

    let maxNumber = number[0];
    for (let i = 1; i < number.length; i++) {
        if (number[i] > maxNumber) {
            maxNumber = number[i];
        }
    }
    return Number(maxNumber);
}

//Task 2. Pow function
let calcNumberPow = function(x, n) {
    let result = x;

    if (n < 0) {
        result = 'n argument should be int number';
    } else {
        for (let i = 1; i < n; i++) {
            result *= x;
        }
    }
    
    return result;
};

//Task 3. GetFirstLetterUpperCase
function getFirstLetterUpperCase(name) {
    let firstLetter = name[0].toUpperCase();
    let otherLetters = name.slice(1, name.length);
    name = otherLetters.toLowerCase();

    let result = firstLetter + name;
    return result;
}

//Task 5. GetRandomNumber function
function getRandomNumber(n, m) {
    n = Math.ceil(n);
    m = Math.floor(m);
 
    return Math.floor(Math.random() * (m - n) + n);
 }