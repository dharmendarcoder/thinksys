let a = [0, false, undefined, NaN, 1, 2, 3, 4, 5];
let undefine = a.reduce((currentvalue, element) => {

    if (element !== undefined && element !== null) {
        return element;
    }
}, "");
console.log(undefine);
//another way
function notNull(...a) {
    for (let e of a) {
        if (e !== undefined && e !== null && !isNaN(e)) {
            return e;
        }
    }
    return false;
}

console.log(notNull(undefined, undefined, NaN, null, 1, 2, 3, 4, 5));

