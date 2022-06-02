
// Function 1. Gets the random array
const getRandomArray = (length, min, max) => {
    const randomArr = [];

    for (let i = 0; i < length; i++) {
        randomArr.unshift( 
        Math.floor( Math.random() * (max - min) + min ) );
    }

    return randomArr;
}
const randomArray = getRandomArray(15, 1, 100);
console.log('My Random Array: ', randomArray );

// Function 3. Gets the average value
function getAverage(...numbers) {
   const averageArr = Array.from(numbers);
   const filteredAverageArr = averageArr.filter( value => typeof value === 'number' && parseInt(value));
   const sumOfArrayElements = filteredAverageArr.reduce((previousValue, currentValue) =>
    previousValue + currentValue
    );

   return Number(sumOfArrayElements / averageArr.length);
} 
const averageArray = getAverage(1, 2, 3.5,'j', 3, 4);
console.log('My getAverage num: ', averageArray);

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