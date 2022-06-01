
// Function 1. Gets the random array
const getRandomArray = (length, min, max) => {
    const randomArr = [];

    for (let i = 0; i < length; i++) {
        randomArr.unshift( Math.floor( Math.random() * (max - min) + min ) );
    }

    return randomArr;
}

const randomArray = getRandomArray(15, 1, 100);
console.log('My Random Array: ', randomArray );

function getModa(...numbers) {
    for (let num of numbers) {
        
    }
}