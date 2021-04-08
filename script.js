"use strict";

let arg2 = "Lorem ipsum dolor sit amet , consectetur adipisicing elit. Et, dolores?";
let arg = "                                  какая-то строка     ";
function get(smthg) {
  if  (typeof(smthg) !== 'string') {
    alert("Нужна строка");
    return;
  } else {
    smthg = smthg.trim();
    return smthg.length > 30 ? smthg.slice(0, 30) + '...' : smthg;
  }
}
console.log(get(arg));