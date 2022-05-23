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
    } else if (n === 0) {
        result = 1;
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
    if (value.endsWith('$')) {
        value = value.substring(0, value.length - 1) * dollarCurrency;
    } else if (value.endsWith('UAH')) {
         value = value.substring(0, value.length - 3) / dollarCurrency;
    } else {
         let currencyEror = new Error('The currency should be $ or UAH!');
         alert(currencyEror); 
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
        `<p>Function #1: ${getMaxDigit(385)}</p>
         <p>Function #2: ${calcNumberPow(2, 5)}</p>
         <p>Function #3: ${getFirstLetterUpperCase('bOb')}</p>
         <p>Function #4: ${calcSalaryWithNoFee(1000)}</p>
         <p>Function #5: ${getRandomNumber(2, 30)}</p>
         <p>Function #6: ${countLetter('a', 'blablabla')}</p>
         <p>Function #7-8: ${convertCurrency('1000$')}</p>
         <p>Function #9-10: ${getRandomPassword(3)}</p>
         <p>Function #11: ${deleteLetters('a', 'blablabla')}</p>
         <p>Function #12: ${isPalyndrom('never odd or even')}</p>
         <p>Function #13: ${deleteDublicateLetters('bob was cold outside')}</p>
    `);
