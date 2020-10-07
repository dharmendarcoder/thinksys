
const compare = (a, b) => {
    if (a === b) return true;


    if ((typeof a !== "object" && typeof b !== "object"))
        return a === b;

    if (a === null || a === undefined || b === null || b === undefined)
        return false;

    if (a.prototype !== b.prototype) return false;

    let keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length)
        return false;

    return keys.every((k) => compare(a[k], b[k]));
};

const obj1 = {
    name: "dharmendar kumar",
    place: "Aligarh",
    education: ["b.tech", "12th", "10th"]
};

const obj2 = {
    name: "dharmendar kumar",
    place: "Aligarh",
    education: ["b.tech", "12th", "10th"]
};
console.log(compare(obj1, obj2));
