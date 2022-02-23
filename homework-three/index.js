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

//Task 4. CalcSalaryWithNoFee
let calcSalaryWithNoFee = (salary) => salary - (salary * 19.5 / 100);

//Task 5. GetRandomNumber function
function getRandomNumber(n, m) {
    n = Math.ceil(n);
    m = Math.floor(m);
 
    return Math.floor(Math.random() * (m - n) + n);
    }

 //Task 6. CountLetter function
 function countLetter(letter, word) {
    let counter = 0;

    for (let i = 0; i < word.length; i++) {
         if (word[i] === letter) {
             counter++;
            }
        }
        return counter;
     }

 //Task 7-8. ConvertCurrency function
  function convertCurrency(value) {
    const dollarCurrency = 29.36;
    if (value.endsWith('$')) {
        value = value.substring(0, value.length - 1) * dollarCurrency;
    } else if (value.endsWith('UAH')) {
         value = value.substring(0, value.length - 3) / dollarCurrency;
    } else {
         let currencyEror = new Error('The currency should be $ or UAH!');
         throw currencyEror; 
     }
    return value;
    }

  //Task 9-10. GetRandomPassword
  function getRandomPassword(passwordLength = 8) {
     let password = (Math.random().toString().slice(2, passwordLength)) + 
                    (Math.random().toString().slice(2, 4));

     return +password; 
    }

  //Task 11. DeleteLetters function
  function deleteLetters(letter, word) {
     for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            word = word.replace(letter, '');
        } else continue;
     }
        return word;
    }

    
