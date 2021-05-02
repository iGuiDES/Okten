/* General */

/*
 Task 1
 let str = 'hello';
 console.log(str);
 alert(str);
 document.write(str);
 let abbr = 'owu';
 console.log(abbr);
 alert(abbr);
 document.write(abbr);
 let subCom = 'com';
 console.log(subCom);
 alert(subCom);
 document.write(subCom);
 let subUa = 'ua';
 console.log(subUa);
 alert(subUa);
 document.write(subUa);
 let num1 = 1;
 console.log(num1);
 alert(num1);
 document.write(num1);
 let num10 = 10;
 console.log(num10);
 alert(num10);
 document.write(num10);
 let num999 = -999;
 console.log(num999);
 alert(num999);
 document.write(num999);
 let num123 = 123;
 console.log(num123);
 alert(num123);
 document.write(num123);
 let numPi = 3.14;
 console.log(numPi);
 alert(numPi);
 document.write(numPi);
 let num27 = 2.7;
 console.log(num27);
 alert(num27);
 document.write(num27);
 let num16 = 16;
 console.log(num16);
 alert(num16);
 document.write(num16);
 let boolTrue = true;
 console.log(boolTrue);
 alert(boolTrue);
 document.write(boolTrue);
 let boolFalse = false;
 console.log(boolFalse);
 alert(boolFalse);
 document.write(boolFalse);
 Task 2
 str = 'World!';
 console.log(str);
 alert(str);
 document.write(str);
 abbr = 'okten';
 console.log(abbr);
 alert(abbr);
 document.write(abbr);
 subCom = 'com.ua';
 console.log(subCom);
 alert(subCom);
 document.write(subCom);
 subUa = 'net.ua';
 console.log(subUa);
 alert(subUa);
 document.write(subUa);
 num1 = 11;
 console.log(num1);
 alert(num1);
 document.write(num1);
 num10 = 1000;
 console.log(num10);
 alert(num10);
 document.write(num10);
 num999 = 9;
 console.log(num999);
 alert(num999);
 document.write(num999);
 num123 = 321;
 console.log(num123);
 alert(num123);
 document.write(num123);
 numPi = 143;
 console.log(numPi);
 alert(numPi);
 document.write(numPi);
 num27 = 777;
 console.log(num27);
 alert(num27);
 document.write(num27);
 num16 = 666;
 console.log(num16);
 alert(num16);
 document.write(num16);
 boolTrue = false;
 console.log(boolTrue);
 alert(boolTrue);
 document.write(boolTrue);
 boolFalse = true;
 console.log(boolFalse);
 alert(boolFalse);
 document.write(boolFalse);
 Task 3
 const strN1 = 100,
     strN2 = 200,
     strN3 = 300;
 console.log(strN1);
 alert(strN1);
 document.write(strN1);
 console.log(strN2);
 alert(strN2);
 document.write(strN2);
 console.log(strN3);
 alert(strN3);
 document.write(strN3);
 Task 4
 let lastName = prompt('Your last name:'),
     firstName = prompt('Your first name:'),
     middleName = prompt('Your middle name:');
 console.log(lastName);
 alert(lastName);
 document.write(lastName);
 console.log(firstName);
 alert(firstName);
 document.write(firstName);
 console.log(middleName);
 alert(middleName);
 document.write(middleName);
 Task 5,
      6 (стоит ли в 6 task создавать дополнительные prompt для каждого члена семьи?)
 let person = lastName + ' ' + firstName + ' ' + middleName;
 let mother = lastNameMom + ' ' + firstNameMom + ' ' + middleNameMom;
 let brother = lastNameBro + ' ' + firstNameBro + ' ' + middleNameBro;
 const family = {
     me: person,
     mom: mother,
     bro: brother
 };

 console.log(family);
 Task 7
 let numP1 =+ prompt('Enter number 1'),
     numP2 =+ prompt('Enter number 2'),
     numP3 =+ prompt('Enter number 3');

 let resNumP123 = numP1 + numP2 + numP3;
 console.log(resNumP123);
 Task 8
 let numPars1 = prompt('Enter number 1'),
     numPars2 = prompt('Enter number 2'),
     numPars3 = prompt('Enter number 3'),
     numPars4 = prompt('Enter number 4');

 let result = parseInt(numPars1) + parseInt(numPars2) + parseInt(numPars3) + parseInt(numPars4);
 console.log(result);
 Task 9
 let numFloat1 = prompt('Enter floating point number 1'),
     numFloat2 = prompt('Enter floating point number 2'),
     numFloat3 = prompt('Enter floating point number 3');

 let result = parseFloat(numFloat1) + parseFloat(numFloat2) + parseFloat(numFloat3);
 console.log(result);
 Task 10
 let numMath1 = prompt('Enter floating point number 1'),
     numMath2 = prompt('Enter floating point number 2'),
     numMath3 = prompt('Enter floating point number 3');

 let result = Math.round(numMath1) + Math.round(numMath2) + Math.round(numMath3);
 console.log(result);
 Task 11
 let numPow1 =+ prompt('Enter integer 1'),
     numPow2 =+ prompt('Enter integer 2');

 let result = Math.pow(numPow1, numPow2);
 console.log(result);
 Task 12
 let a = 100,
     b = '100',
     c = true,
     d = undefined;

 console.log(typeof a);
 console.log(typeof b);
 console.log(typeof c);
 console.log(typeof d);
 Task 13
   let  a1 = 5 < 6,
     a2 = 5 > 6,
     a3 = 5 >= 6,
     a4 = 5 <= 6,
     b1 = 10 == 10,
     b2 = 10 === 10,
     b3 = 10 < 10,
     b4 = 10 != 10,
     b5 = 10 > 10,
     c1 = 123 === '123',
     c2 = 123 >= '123';

 console.log(`
 ${a1}
 ${a2}
 ${a3}
 ${a4}
 ${b1}
 ${b2}
 ${b3}
 ${b4}
 ${b5}
 ${c1}
 ${c2}`);
 Classes task 1
 let str = 'Привет',
     num = 123,
     flag = true,
     txt = 'true';

 console.log(typeof str);
 console.log(typeof num);
 console.log(typeof flag);
 console.log(typeof txt); // не boolean так как значение переменной "string"
 Classes task 2
 let a1, a2, a3, a4, a5;
 a1 = 5 + 3; // значение
 a2 = 5 - 3; // значение
 a3 = 5 * 3; // значение
 a4 = 5 / 3; // значение
 a5 = 5 % 3; // остаток от деления

 console.log(a1, a2, a3, a4, a5);
 Classes task 3
 let a6, a7, a8, a9, a10;
 a6 = 5 % 3; //2
 a7 = 3 % 5; //3
 a8 = 5 + '3'; //53
 a9 = '5' - 3; //2
 a10 = 75 + 'кг';//75кг

 console.log(a6, a7, a8, a9, a10);
 Classes task 4
 let height = 23,
     width = 10;

 let s  = 23 * 10;
 console.log(s + ' ' + 'см.');
 Classes task 5
 let heightС = 10,
     dC = 4;

 let v =  dC * heightС;
 console.log(v);
 Classes task 6
 let n = 3,
     m = 4;

 let k = Math.pow(3, 3) + Math.pow(4, 4);
 console.log(k);
 Classes task 7
 let str = 'Hello, World!';
 console.log(str);
 alert(str);
 document.write(str);
 Classes task 8
 const aboutMe = {
     firstName: 'Yatsenko',
     lastName: 'Alexandr',
     age: 27,
     hobby: 'development'
 }

 alert(`
 Меня зовут ${aboutMe.lastName} ${aboutMe.firstName}\n
 Мне ${aboutMe.age} лет \n
 Мое хобби - ${aboutMe.hobby}.
 `);
 Classes task 9
 let str1, str2, str3, concatenation;
 str1 = 'Кто';
 str2 = 'ты';
 str3 = 'такой?';

 concatenation = str1 + ' ' + str2 + ' ' + str3;
 document.write(concatenation);
 Classes task 10
 let str = "20";
 let a = 5;
 document.write(str + a + "<br/>"); // 205 перем а становится строкой
 document.write(str - a + "<br/>"); // 25 - перем str становится числом
 document.write(str * "2" + "<br/>"); // 40 - преобразование типов
 document.write(str / 2 + "<br/>"); // 10 - преобразование типов
 Classes task 11
 parseInt("3.14") //3
 parseInt("-7.875")//-7
 parseInt("435")//435
 parseInt("Вася")//NaN
 Classes task 12
 let str = prompt('Enter somethin', 'ho-ho');
 console.log(str);
 Classes task 13
 let numPrompt1 =+ prompt('Enter number 1', 10),
     numPrompt2 =+ prompt('Enter number 2', 20);

 alert(numPrompt1 + numPrompt2);
 Classes task 14
 let lastNameU = prompt('Last name', 'Иван'),
     firstNameU = prompt('First name', 'Иванов'),
     ageU = prompt('Age', 32);

 alert(`
 Доброго вечера ${lastNameU} ${firstNameU}, мои поздравления что Вам ${ageU}!
 `);

*/



// Дополнительное задание

// 1. Три різних числа вводяться через prompt().
//     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

// let res1 = +prompt('Enter number 1', 10),
//     res2 = +prompt('Enter number 2', 7),
//     res3 = +prompt('Enter number 3', 20);
//
// if (res1 < res2 && res2 < res3) {
//     console.log(res1, res2, res3);
// } else if (res1 < res3 && res3 < res2) {
//     console.log(res1, res3, res2);
// } else if (res2 < res3 && res3 < res1) {
//     console.log(res2, res3, res1);
// } else if (res2 < res1 && res1 < res3) {
//     console.log(res2, res1, res3);
// } else if (res3 < res1 && res1 < res2) {
//     console.log(res3, res1, res2);
// } else {
//     console.log(res3, res2, res1);
// }


// 2. Все параматры получаем с клавиатуры!!!!
//     Имитируем поведение пешехода на перекстке.
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!

// let value = prompt('Input "green", "yellow" or "red"');
//
// if (value === 'green') {
//     console.log('Иди');
// } else if (value === 'yellow') {
//     console.log('Подожди');
// } else if (value === 'red') {
//     console.log('Стой');
// } else {
//     console.log('Делай что хочешь, только смотри по сторонам)');
// }


//     3. Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//     Улучшаем предыдущее задание.
//     Если светофор зеленый и машин нет - вывести "иди".
//     Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
//     Если светофор желтый и машин нет - вывести "все рано жди".
//     Если светофор красный и машин нет- вывести "стой все рано".
//     Если светофор красный - и машины есть вывести "стой и жди".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!

// let isRoadClear = confirm('Есть машина на дороге?'),
//     resPrompt = prompt('Укажите какой сейчас цвет светофора! (green, yellow, red)');
//
// if (isRoadClear === false && resPrompt === 'green') {
//     console.log('иди');
// } else if (isRoadClear === true && resPrompt === 'green') {
//     console.log('подожди пока нарушители проедут');
// } else if (isRoadClear === true && resPrompt === 'yellow') {
//     console.log('жди');
// } else if (isRoadClear === false && resPrompt === 'yellow') {
//     console.log('все рано жди');
// } else if (isRoadClear === false && resPrompt === 'red') {
//     console.log('стой все рано');
// } else if (isRoadClear === true && resPrompt === 'red') {
//     console.log('стой и жди');
// } else {
//     console.log('делай что хочешь');
// }