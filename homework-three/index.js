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
let getFirstLetterUpperCase = (name) => {
 return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();  
}

//Task 4. CalcSalaryWithNoFee
let calcSalaryWithNoFee = (salary) => salary - (salary * 19.5 / 100);

//Task 5. GetRandomNumber function
function getRandomNumber(numberN, numberM) {
    let number = Math.ceil(Math.random() * 100);
    
    for (let i = numberN; i < numberM; i++) {
        if (number > numberN && number < numberM) {
            return number;
        }
    }
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
     return +(Math.random().toString().slice(2, passwordLength)) + 
                    (Math.random().toString().slice(2, 4));
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

    //Task 12. Palyndrom function
    function isPalyndrom(sentence) {
        for (let i = 0; i < sentence.length; i++) {
            for (let j = sentence.length - 1; j > 0; j--) {
                if (word[i] === word[j] {
                    return true;
                    }
                return false;
            }
        }
    }

    //Task 13. Delete dublicate letters function.
    function deleteDublicateLetters(sentence) {
           for (let i = 0; i < sentence.length; i++) {
            for (let j = i + 1; j < sentence.length; j++) {
            if (sentence[i] === sentence[j]) {
             sentence = sentence.replaceAll(sentence[i], '');   
            }
            }
           }
        return sentence;
    }

    document.writeln(
        `<p>Function #1: ${getMaxDigit(385)}</p>
         <p>Function #2: ${calcNumberPow(2, 5)}</p>
         <p>Function #3: ${getFirstLetterUpperCase('jOhN')}</p>
         <p>Function #4: ${calcSalaryWithNoFee(15000)}</p>
         <p>Function #5: ${getRandomNumber(1, 10)}</p>
         <p>Function #6: ${countLetter('a', 'abcdabcdabcd')}</p>
         <p>Function #7-8: ${convertCurrency('250$')}</p>
         <p>Function #9-10: ${getRandomPassword(6)}</p>
         <p>Function #11: ${deleteLetters('a', 'blablabla')}</p>
         <p>Function #12: ${isPalyndrom('never odd or even')}</p>
         <p>Function #13: ${deleteDublicateLetters('bob was cold outside')}</p>
    `);
