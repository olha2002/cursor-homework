const applesPrice = 15.678;
const meatPrice = 123.965;
const oilPrice = 90.2345;

document.writeln('Max Price:', Math.max(applesPrice, meatPrice, oilPrice) ); // max price
document.writeln('Min Price:', Math.min(applesPrice, meatPrice, oilPrice) ); // min price

function itemsSum(a, b, c) {
    return a + b + c;
}

document.writeln('Prices Sum: ', itemsSum(applesPrice, meatPrice, oilPrice) );

let applesPriceInt = Math.floor(applesPrice);  //Int Price
let meatPriceInt = Math.floor(meatPrice);     //Int Price
let oilPriceInt = Math.floor(oilPrice);      //Int Price

document.writeln( 'Round Sum: ', Math.round
(itemsSum(applesPriceInt, meatPriceInt, oilPriceInt) / 100) * 100 );  // Round Price

if (itemsSum(applesPriceInt, meatPriceInt, oilPriceInt) % 2 === 0) {  // Odd or Even
    document.writeln(true);
} else {
    document.writeln(false);
}

let clientSum = 500;
let clientChange = clientSum - (itemsSum(applesPrice, meatPrice, oilPrice));
document.writeln("Client's change: ", clientChange);  // Client's Change

let priceAverage = (itemsSum(applesPrice, meatPrice, oilPrice)) / 3;
document.writeln('Average Price: ', Math.floor(priceAverage * 100) / 100 );  //Average Prices

function getRandomDiscount(max) {
    return Math.floor(Math.random() * max);
}

let userPrice = prompt('Enter your price: ', 260.66);
let userDiscount = Math.floor((userPrice * getRandomDiscount(100)) / 100);
console.log(`Customer pays less on ${userDiscount}`);

let cost = Math.floor((userPrice * 100) / 100) / 2;
let wholeProfit = cost - userDiscount;

console.log(wholeProfit);