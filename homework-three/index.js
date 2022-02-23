
//Task 2. Pow function
let calcNumberPow = function(x, n) {
    let result = x;

    if (n < 0) {
        result = 'n argument should be int number';
    } else {
        for (let i = 1; i < n; i++) {
            result *= x;
        }
    }
    
    return result;
};