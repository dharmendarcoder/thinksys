let multiply = (a) => (b) => a * b;
console.log(multiply(5)(6));

// another way
function mul(a) {
    return function (b) {
        return a * b;
    }
}