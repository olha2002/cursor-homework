const MIN_VALUE = 1500;
const MAX_VALUE = 2000;

const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

const ukraineTax = getMyTaxes.call(ukraine, 3000);
const latviaTax = getMyTaxes.call(latvia, 76447);
const litvaTax = getMyTaxes.call(litva, 18533.43);

const ukraineMiddleTax = getMiddleTaxes.call(ukraine);
const latviaMiddleTax = getMiddleTaxes.call(latvia);
const litvaMiddleTax = getMiddleTaxes.call(litva);

const totalTaxesUkraine = getTotalTaxes.call(ukraine);
const totalTaxesLatvia = getTotalTaxes.call(latvia);
const totalTaxesLitva = getTotalTaxes.call(litva);

// Function #1 that gets taxes
function getMyTaxes(salary) {
  return Number(Math.round(salary * this.tax));
}

// Function #2 that gets middle taxes
function getMiddleTaxes() {
  return Number(Math.round(this.tax * this.middleSalary));
}

// Function #3 that gets total taxes
function getTotalTaxes() {
  return Number(Math.round(this.tax * this.middleSalary * this.vacancies));
}

function getMySalary() {
  setInterval(() => {
    const resultObj = {};

    resultObj.salary = Math.floor(
      Math.random() * (MAX_VALUE - MIN_VALUE + 1) + MIN_VALUE
    );
    resultObj.taxes = getMyTaxes.call(this, resultObj.salary);
    resultObj.profit = resultObj.salary - resultObj.taxes;

    console.log(resultObj);
  }, 10000);
}

console.log("Tax in Ukraine: ", ukraineTax);
console.log("Tax in latvia: ", latviaTax);
console.log("Tax in Litva: ", litvaTax);

console.log("Middle tax in Ukraine: ", ukraineMiddleTax);
console.log("Middle tax in Latvia: ", latviaMiddleTax);
console.log("Middle tax in Litva: ", litvaMiddleTax);

console.log("Total taxes in Ukraine: ", totalTaxesUkraine);
console.log("Total taxes in Latvia: ", totalTaxesLatvia);
console.log("Total taxes in Litva: ", totalTaxesLitva);

getMySalary.call(ukraine);