//variables
const applesPrice = 15.678;
const meatPrice = 123.965;
const oilPrice = 90.2345;

const applesPriceInt = Math.floor(applesPrice); //Int Price
const meatPriceInt = Math.floor(meatPrice); //Int Price
const oilPriceInt = Math.floor(oilPrice);

const clientSum = 500;
const clientChange = clientSum - itemsSum(applesPrice, meatPrice, oilPrice);
const priceAverage = (itemsSum(applesPrice, meatPrice, oilPrice) / 3).toFixed(
  2
);

let userPrice = Number(prompt("Enter your price: ", 260.66));
if (userPrice) {
  userPrice = userPrice.toFixed(2);
} else {
  userPrice = 260.66;
}

const userDiscount = (userPrice * getRandomDiscount(100)) / 100;
const userDiscountPersentage = Math.round((userDiscount * 100) / userPrice);

const cost = Math.floor(userPrice) / 2;
const pureProfit = cost - userDiscount;

//functions
function itemsSum(a, b, c) {
  return a + b + c;
}

function checkEvenOrOdd() {
  return itemsSum(applesPrice, meatPrice, oilPrice) % 2 === 0 ? true : false;
}

function getRandomDiscount(max) {
  return Math.floor(Math.random() * max);
}

//Advanced
document.writeln(
  `<p>Max Price: ${Math.max(applesPrice, meatPrice, oilPrice)}</p>
     <p>Min Price: ${Math.min(applesPrice, meatPrice, oilPrice)}</p>   
     <p>Prices Sum: ${itemsSum(applesPrice, meatPrice, oilPrice)}</p>
     <p>Int Apples Price: ${applesPriceInt}</p> 
     <p>Int Meat Price: ${meatPriceInt}</p> 
     <p>Int Oil Price: ${oilPriceInt}</p> 
     <p>Int Sum: ${Math.floor(
       itemsSum(applesPriceInt, meatPriceInt, oilPriceInt)
     )}</p>
     <p>Round Sum: ${
       Math.round(itemsSum(applesPriceInt, meatPriceInt, oilPriceInt) / 100) *
       100
     }</p>
     <p>Is it Even Int Sum(229) - ${checkEvenOrOdd()}</p>
     <p>Client's change: ${clientChange}</p>
     <p>Average Price: ${priceAverage}</p>
     <p>Start price: ${userPrice}</p>
     <p>User Discount in Persentage: ${userDiscountPersentage}%</p>
     <p>Customer pays less on ${userDiscount}</p>
     <p>Pure profit: ${pureProfit}</p>`
);
