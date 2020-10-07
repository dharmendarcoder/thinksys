
let arr= [0, false, NaN, 1, 2, 3, 4, 5];
let filter1 = arr.filter((element) => {
    let arr2= [];
    let number = Number(element);

    if (number !== 0 && number !== NaN) {
        return arr2.push(element);
    };
});
console.log(filter1)
//different way
var filter2 = arr.filter((element) => {
    if (element) {
        return element;
    }
});
console.log(filter2);


