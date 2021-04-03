let num = 266219;

let arr = (String(num).split(""));

let answer = arr.reduce((acc, rec) => acc * rec);
console.log(answer);

console.log(answer **=3);

console.log(typeof(answer));

console.log(String(answer).substring(0, 2));