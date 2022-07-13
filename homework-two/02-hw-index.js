let numberN;
let numberM;
let userDecision;
let numberSum = 0;

do {
  numberN = +prompt("Enter n: ", 1);
  numberM = +prompt("Enter m: ", 10);
} while (
  !numberN ||
  !numberM ||
  numberN >= numberM ||
  !Number.isInteger(numberN) ||
  !Number.isInteger(numberM)
);

userDecision = confirm("Do you want to skip Even Numbers?");

for (let i = numberN; i <= numberM; i++) {
  if (userDecision) {
    if (i % 2 === 0) continue;

    numberSum += i;
  } else {
    numberSum += i;
  }
}

document.writeln(
  `<p>You have entered n: ${numberN}</p>
     <p>You have entered m: ${numberM}</p>
     <p>Your decision to skip Even Numbers was: ${userDecision}</p>
     <p>Result: ${numberSum}</p>`
);
