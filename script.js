"use strict";

let lang = "en";

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
	'ru': arrRu,
	'en': arrEn,
};
console.log(arr[lang]);

let namePerson = "Максим";
console.log(namePerson === "Артем" ? "Директор" : namePerson === "Максим" ? "Преподаватель" : "студент");