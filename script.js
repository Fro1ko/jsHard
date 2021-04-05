"use strict";

let lang = "ru";

let arrRu = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

let arrEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

if (lang === "ru") {
  console.log(arrRu);
} else if (lang === "en") {
  console.log(arrEn);
} else {
  console.log("Что-то пошло не так!");
}


switch (lang) {
  case "en":
    console.log(arrEn);
    break;
  case "ru":
    console.log(arrRu);
    break;
  default:
    console.log("Что-то пошло не так!");
    break;
}

let arr = {
	'ru':['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
	'en':['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
};
console.log(arr[lang]);

let namePerson = "Денис";
let unnamed = namePerson === "Артем" ? console.log("Директор") : namePerson === "Максим" ? console.log("Преподаватель")
: console.log("студент"); // если убрать переменную, выдаёт ошибку

