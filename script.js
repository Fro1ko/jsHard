"use strict";

let num = 266219;
let num2 = 1;

let arr = (String(num).split(""));

let answer = arr.reduce((acc, rec) => acc * rec);
console.log(answer);

console.log(answer **=3);

console.log(typeof(answer));    

console.log(String(answer).substring(0, 2));

// второй способ

// arr.forEach(function(el) {
//   return(num2 *= el);
// });
// console.log(num2);

// третий способ

var num3 = arr.map( function(el, i) { return num2*=el; } );
console.log( num3[5] ); 

