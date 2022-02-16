const applesPrice = 15.678;
const meatPrice = 123.965;
const oilPrice = 90.2345;

document.writeln('Max Price:', Math.max(applesPrice, meatPrice, oilPrice) ); // max price
document.writeln('Min Price:', Math.min(applesPrice, meatPrice, oilPrice) ); // min price

let itemsSum = applesPrice + meatPrice + oilPrice;
document.writeln('Sum: ', itemsSum); // Prices Sum

let applesPriceInt = Math.floor(applesPrice);  //Int Price
let meatPriceInt = Math.floor(meatPrice);     //Int Price
let oilPriceInt = Math.floor(oilPrice);      //Int Price

let itemsSumInt = applesPriceInt + meatPriceInt + oilPriceInt;
document.writeln( 'Round Sum: ', Math.round(itemsSumInt / 100) * 100 );  // Round Price

if (itemsSumInt % 2 === 0) {  // Odd or Even
    console.log(true);
} else {
 console.log(false);
}

let clientSum = 500;
let clientChange = clientSum - (applesPrice + meatPrice + oilPrice);
document.writeln("Client's change: ", clientChange);  // Client's Change

let priceAverage = itemsSum / 3;
console.log( Math.floor(priceAverage * 100) / 100 );  //Average Prices
