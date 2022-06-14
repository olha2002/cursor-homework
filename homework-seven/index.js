const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// Function #1 that gets taxes
function getMyTaxes(salary) {
    return Number(Math.round(salary * this.tax));
}

const ukraineTax = getMyTaxes.call(ukraine, 3000);
const latviaTax = getMyTaxes.call(latvia, 76447);
const litvaTax = getMyTaxes.call(litva, 18533.43);

console.log('Tax in Ukraine: ', ukraineTax );
console.log('Tax in latvia: ',  latviaTax );
console.log('Tax in Litva: ',  litvaTax );

// Function #2 that gets middle taxes
function getMiddleTaxes() {
    return Number(Math.round(this.tax * this.middleSalary));
}

const ukraineMiddleTax = getMiddleTaxes.call(ukraine);
const latviaMiddleTax = getMiddleTaxes.call(latvia);
const litvaMiddleTax = getMiddleTaxes.call(litva);

console.log(ukraineMiddleTax);
console.log(latviaMiddleTax);
console.log(litvaMiddleTax);

