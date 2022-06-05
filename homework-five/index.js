const BAD_WORDS = ['shit', 'fuck'];

// Function 1. Gets the random array
const getRandomArray = (length, min, max) => {
    const randomArr = [];

    if (min > max) {
        return 'the value min must be lower than max!';
    }

    for (let index = 0; index < length; index++) {
        randomArr.unshift( 
        Math.floor( Math.random() * (max - min) + min ) );
    }

    return randomArr;
}
const randomArray = getRandomArray(8, 55, 100);
console.log('My Random Array: ', randomArray );

// Function 2.
/*const getModa = (...numbers) => {
    const modaArr = Array.from(numbers);
    const filteredModaArray = modaArr.filter(value => typeof value === 'number' && parseInt(value));
    console.log(filteredModaArray);


}

console.log(getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
*/
// Function 3. Gets the average value
function getAverage(...numbers) {
   const averageArr = Array.from(numbers);
   const filteredAverageArr = averageArr.filter(value => Number(value) && parseInt(value) === value);
   const sumOfArrayElements = filteredAverageArr.reduce((previousValue, currentValue) =>
    previousValue + currentValue
    );

   return Number(sumOfArrayElements / averageArr.length);
} 
const averageArray = getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log('My getAverage num: ', averageArray);

// Function 4. Gets numbers median
function getMedian(...numbers) {
    const medianArr = Array.from(numbers);
    const filteredMedianArr = medianArr.filter(value => Number(value) && parseInt(value) === value);
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

const median = getMedian(1, 2, 3, 4, 5, 6, 8, 9);
console.log('My Median: ', median );
// Function 5. Filters even numbers
const filterEvenNumbers = (...numbers) => {
    return Array.from(numbers).filter(value => value % 2 !== 0);
}
const filterEvenNumbersArray = filterEvenNumbers(1, 2, 3, 4, 5, 6, 8, 8, 9);
console.log('Filtered with EvenNumbers Array', filterEvenNumbersArray);

// Function 6. Counts positive numbers
const countPositiveNumbers = (...numbers) => {
   const positiveNumbersArray = Array.from(numbers).filter(value => value > 0);
   return positiveNumbersArray.length;
}
const countPositiveNumbersArr = countPositiveNumbers(1, -2,  3, -4, -5,  6, -1);
console.log('Positives numbers: ', countPositiveNumbersArr);

// Function 7. Gets divided by 5 numbers
const getDividedByFive = (...numbers) => {
    return Array.from(numbers).filter(value => value % 5 === 0);
}
const dividedByFiveArray = getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log('Divided by 5 numbers: ', dividedByFiveArray );

// Function 8. Replaces bad word by ****
function replaceBadWords(string, addYoursBadWord) {
    if (string === '') {
        return 'Enter your phrase!';
    }

    if (addYoursBadWord !== '') {
        BAD_WORDS.push(addYoursBadWord);
    }

    const splitedWords = string.split(' ');

    const result = splitedWords.map(phrase => {
        for (let badWord of BAD_WORDS) {
            if (phrase.includes(badWord)) {
                return phrase.split(badWord).join('****');
            }
        }
        return phrase;
    });
    
    return result.join(' ');
}

const replacedBadWords = replaceBadWords("Are you fucking kidding?");
console.log('Replaced Bad words: ', replacedBadWords);

// Function 9. Divides word by three parts
function divideByThree(word) {
    return word.toLowerCase().replaceAll(' ', '').match(/.{1,3}/g);
}
const dividedByThreeArray = divideByThree('Commander');
console.log('Divided by 3 Array: ', dividedByThreeArray);

// Function 10. 
/*function generateCombinations(word) {


    const result = words.filter(word => word.length > 10);
    return result;
}*/