const BAD_WORDS = ['shit', 'fuck'];

// Function 1. Gets the random array
const getRandomArray = (length, min, max) => {
    const randomArr = [];

    if (min > max) {
        return 'the value min must be lower than max!';
    }

    for (let index = 0; index < length; index++) {
        randomArr.unshift( 
        Math.floor( Math.random() * (max - min + 1) + min ) );
    }

    return randomArr;
}
const randomArray = getRandomArray(8, 5, 10);
console.log( `My Random Array: ${randomArray}` );

// Function 2. Gets the array moda.
const getModa = (...numbers) => {
    const filteredModaArray = numbers.filter(value => Number(value) && parseInt(value) === value);
    const occurencesObj = {};
    filteredModaArray.forEach(element => {
        if (!occurencesObj[element]) occurencesObj[element] = 0;
        occurencesObj[element]++;
    });

    let resultArr = [];
    let maxValue = 0;

    for (let key in occurencesObj) {
        if (occurencesObj[key] > maxValue) {
            resultArr = [key];
            maxValue = occurencesObj[key]; 
        } else if (occurencesObj[key] === maxValue) {
            resultArr.push(key);
        }
    }

    if (Object.keys(occurencesObj).length === resultArr.length) {
        resultArr = [];
    }

    return resultArr.join(',');
}

const modaValues = getModa(3, 3, 2, 2, 5);
console.log( `Moda values: ${modaValues}` );

// Function 3. Gets the average value
function getAverage(...numbers) {
   const filteredAverageArr = numbers.filter(value => Number(value) && parseInt(value) === value);
   const sumOfArrayElements = filteredAverageArr.reduce((previousValue, currentValue) =>
    previousValue + currentValue
    );

   return Number(sumOfArrayElements / filteredAverageArr.length);
} 
const averageArray = getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log( `My getAverage num: ${averageArray}` );

// Function 4. Gets numbers median
function getMedian(...numbers) {
    const filteredMedianArr = numbers.filter(value => Number(value) && parseInt(value) === value);
    const filteredNumbers = filteredMedianArr.sort((a, b) => a - b );

    for (let index = 0; index < filteredNumbers.length; index++) {
        if (filteredNumbers.length % 2 !== 0) {
            return filteredNumbers[Math.floor(filteredNumbers.length / 2)];
        } else if (filteredNumbers.length % 2 === 0) {
            return (filteredNumbers[(filteredNumbers.length / 2) - 1] + 
                    filteredNumbers[filteredNumbers.length / 2]) / 2;
        } else {
            return [];
        }
    }
}

const median = getMedian(1, 2, 3, 4, 5, 6, 8, 8.6, 'j');
console.log( `My Median: ${median}` );
// Function 5. Filters even numbers
const filterEvenNumbers = (...numbers) => {
    return numbers.filter(value => Number(value) && value % 2 !== 0);
}
const filterEvenNumbersArray = filterEvenNumbers(1, 2, 3, 'g', 4, 5, 6, 8, 8, 9);
console.log( `Filtered with EvenNumbers Array: ${filterEvenNumbersArray}` );

// Function 6. Counts positive numbers
const countPositiveNumbers = (...numbers) => {
   const positiveNumbersArray = numbers.filter(value => Number(value) && value > 0);
   return positiveNumbersArray.length;
}
const countPositiveNumbersArr = countPositiveNumbers(1, -2,  3, -4, -5,  6, -1);
console.log( `Positives numbers: ${countPositiveNumbersArr}` );

// Function 7. Gets divided by 5 numbers
const getDividedByFive = (...numbers) => {
    return numbers.filter(value => Number(value) && value % 5 === 0);
}
const dividedByFiveArray = getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log( `Divided by 5 numbers: ${dividedByFiveArray}` );

// Function 8. Replaces bad word by ****
function replaceBadWords(string, addYoursBadWord) {
    if (string === '') {
        return 'Please enter your phrase!';
    }

    /*if (addYoursBadWord !== '') {
        BAD_WORDS.push(addYoursBadWord);
    }

    const splitedWords = string.toLowerCase().split(' ');
    const result = splitedWords.map(phrase => {
        for (let badWord of BAD_WORDS) {
            if (phrase.includes(badWord)) {
                return phrase.replaceAll(badWord, new Array(badWord.length).fill('*').join(''));
            }
        }
    });
    
    return result.join(' ');
    */

    const badWords = /(shit)|(Fuck)|(bitch)/gi; 
    const replacedString = string.replaceAll(badWords, function(argument) {
        return argument.replaceAll(/./g, '*');
    });

    return replacedString;

}

const replacedBadWords = replaceBadWords("ShitFuckFuckfuckfuckingBitch");
console.log( `Replaced Bad words: `,replacedBadWords );

// Function 9. Divides word by three parts
function divideByThree(word) {
    if (word !== '' && typeof word === 'string') {
        return String(word).toLowerCase().replaceAll(' ', '').match(/.{1,3}/g);
    } else {
        return 'Please enter your word!';
    }
}
const dividedByThreeArray = divideByThree('Commander');
console.log( `Divided by 3 Array: ${dividedByThreeArray}` );

// Function 10. 
const generateCombinations = (word) => {
   let wordArray = Array.from(word);
   const combinationsArr = [];

    if (word.length < 2 || word.length > 10) {
        return 'Please enter your word with length between 2 and 10!';
    } else if (!word || typeof word !== 'string') {
        return 'Please enter string!';
    } 

     for (let index = 0; index < wordArray.length; index++) {
        if (wordArray.length === 2) {
            combinationsArr.push([wordArray[index], wordArray[(index + 1) % 2]].join(''));
      } else {
        const firstLetter = wordArray.splice(0, 1);
        const resultArray = generateCombinations(wordArray.join(''));
        resultArray.forEach(char => combinationsArr.push(char + firstLetter));
        wordArray = [...wordArray, ...firstLetter];
    }
}
    return combinationsArr;
};

const combinations = generateCombinations('man');
console.log(`Combinations of word: ${combinations}` );