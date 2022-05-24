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

    if (n === 0) {
        result = 1;
    } else if (n < 0) {
        for (let i = 1; i < Math.abs(n); i++) {
            result *= x;
        }
            result = 1 / result;
    } else {
        for (let i = 1; i < n; i++) {
            result *= x;
        }
    }
    
    return result;
};

//Task 3. GetFirstLetterUpperCase
const getFirstLetterUpperCase = (name) => {
 return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();  
}

//Task 4. CalcSalaryWithNoFee
const calcSalaryWithNoFee = (salary) => salary - (salary * 19.5 / 100);

//Task 5. GetRandomNumber function
const getRandomNumber = (numberN, numberM) => Math.ceil(Math.random() * (numberM - numberN) + numberN);

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
   if ((value.endsWith('UAH') && +value.substring(0, value.length - 3))) {
         value = Math.round(value.substring(0, value.length - 3) / dollarCurrency) + '$';
    } else if ((value.endsWith('$') && +value.substring(0, value.length - 1))) {
        value = Math.round(value.substring(0, value.length - 1) * dollarCurrency) + 'UAH';
    } else {
         value = 0;
     }
    return value;

    }

  //Task 9-10. GetRandomPassword   при 1 і 2 
  function getRandomPassword(passwordLength = 8) {
      if (passwordLength < 3) {
        return 'You must enter 3 numbers at least!';
      } else {
          return +(Math.random().toString().slice(2, passwordLength)) + 
                  (Math.random().toString().slice(2, 4));
      }
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
                if (sentence[i] === sentence[j]) {
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
        `<p>Result function #1:
         getMaxDigit(385) - ${getMaxDigit(385)}</p>
         <p>Result function #2:
         calcNumberPow(2, 3) - ${calcNumberPow(2, 3)}</p>
         <p>Result function #3:
         getFirstLetterUpperCase('bOb') - ${getFirstLetterUpperCase('bOb')}</p>
         <p>Result function #4:
         calcSalaryWithNoFee(1000) - ${calcSalaryWithNoFee(1000)}</p>
         <p>Result function #5:
         getRandomNumber(2, 30) - ${getRandomNumber(2, 30)}</p>
         <p>Result function #6:
         countLetter('a', 'blablabla') - ${countLetter('a', 'blablabla')}</p>
         <p>Result function #7-8:
         convertCurrency('3560UAH') - ${convertCurrency('3560UAH')}</p>
         <p>Result function #9-10: 
         getRandomPassword(5) - ${getRandomPassword(5)}</p>
         <p>Result function #11:
         deleteLetters('a', 'blablabla') - ${deleteLetters('a', 'blablabla')}</p>
         <p>Result function #12:
         isPalyndrom('never odd or even') - ${isPalyndrom('never odd or even')}</p>
         <p>Result function #13: 
         deleteDublicateLetters('bob was cold outside') - ${deleteDublicateLetters('bob was cold outside')}</p>
    `);