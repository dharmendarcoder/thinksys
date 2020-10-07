function changeToUpper(str) {
  let array = str.trim().split(' ');
  let b = [];
  for (let i = 0; i < array.length; i++) {
    b.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));


  }
  return b.join(' ');
}
console.log(changeToUpper("the quick brown fox"));
//another way
function str(s) {
  return s.split(" ")
    .map(el => el[0].toUpperCase() + el.substring(1))
    .join(" ");
}
console.log(str("the quick brown fox"));