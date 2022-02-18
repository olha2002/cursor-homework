const applesPrice = 15.678;
const meatPrice = 123.965;
const oilPrice = 90.2345;

console.log('Max Price:', Math.max(applesPrice, meatPrice, oilPrice) ); // max price
console.log('Min Price:', Math.min(applesPrice, meatPrice, oilPrice) ); // min price

function itemsSum(a, b, c) {
    return a + b + c;
}
console.log('Prices Sum: ', itemsSum(applesPrice, meatPrice, oilPrice) );

let applesPriceInt = Math.floor(applesPrice);  //Int Price
let meatPriceInt = Math.floor(meatPrice);     //Int Price
let oilPriceInt = Math.floor(oilPrice); 
console.log('Int Apples Price: ', applesPriceInt);     //Int Price
console.log('Int Meat Price: ', meatPriceInt);     //Int Price
console.log('Int Oil Price: ', oilPriceInt);     //Int Price

console.log( 'Int Sum: ', Math.floor(itemsSum(applesPriceInt, meatPriceInt, oilPriceInt)) );
console.log( 'Round Sum: ', Math.round
(itemsSum(applesPriceInt, meatPriceInt, oilPriceInt) / 100) * 100 );  // Round Price

if (itemsSum(applesPrice, meatPrice, oilPrice) % 2 === 0) {  // Odd or Even
    console.log('Is it Even Int Sum - ', true);
} else {
    console.log('Is it Odd Int Sum - ', false);
}

let clientSum = 500;
let clientChange = clientSum - (itemsSum(applesPrice, meatPrice, oilPrice));
console.log("Client's change: ", clientChange);  // Client's Change

let priceAverage = (itemsSum(applesPrice, meatPrice, oilPrice)) / 3;
console.log('Average Price: ', Math.floor(priceAverage * 100) / 100 );  //Average Prices

//Last
function getRandomDiscount(max) {
    return Math.floor(Math.random() * max);
}

let userPrice = +prompt('Enter your price: ', 260.66);
userPrice = (userPrice * 100) / 100;
let userDiscount = (userPrice * getRandomDiscount(100) / 100);
let userDiscountPersentage = Math.round((userDiscount * 100 / userPrice));
console.log(`Customer pays less on ${userDiscount}`);

let cost = Math.round((userPrice * 100) / 100) / 2;
let pureProfit = cost - userDiscount;

console.log('Pure profit: ', pureProfit);

//Advanced
document.writeln(
    `<p>Max Price: ${Math.max(applesPrice, meatPrice, oilPrice)}</p>
     <p>Min Price: ${Math.min(applesPrice, meatPrice, oilPrice)}</p>   
     <p>Prices Sum: ${itemsSum(applesPrice, meatPrice, oilPrice)}</p>
     <p>Int Apples Price: ${applesPriceInt}</p> 
     <p>Int Meat Price: ${meatPriceInt}</p> 
     <p>Int Oil Price: ${oilPriceInt}</p> 
     <p>Int Sum: ${Math.floor(itemsSum(applesPriceInt, meatPriceInt, oilPriceInt))}</p>
     <p>Round Sum: ${Math.round(itemsSum(applesPriceInt, meatPriceInt, oilPriceInt) / 100) * 100}</p>
     <p>Is it Odd Int Sum(229) - ${false}</p>
     <p>Client's change: ${clientChange}</p>
     <p>Average Price: ${Math.floor(priceAverage * 100) / 100}</p>
     <p>Start price: ${userPrice}</p>
     <p>User Discount in Persentage: ${userDiscountPersentage}%</p>
     <p>Customer pays less on ${userDiscount}</p>
     <p>Pure profit: ${pureProfit}</p>`
);