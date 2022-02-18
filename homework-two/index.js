let numberN;
let numberM;
let userDecision;
let numberSum = 0;

do {
    numberN = +prompt('Enter n: ', 1);
    numberM = +prompt('Enter m: ', 10);
} while (!numberN || !numberM);

userDecision = confirm('Do you need Even Numbers?');

for (let i = numberN; i <= numberM; i++) {
    if (!userDecision) {
       if (i % 2 === 0) continue;

       numberSum += i;
    }

    else {
        numberSum += i;
    }
}

document.writeln('Result: ', numberSum);