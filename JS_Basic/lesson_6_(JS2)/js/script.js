// --створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу

// let arrT1_1 = [1, 2, 3.14, 4, 5],
//     arrT1_2 = ['h', 'e', 'l', 'l', 'o'],
//     arrT1_3 = [3.14, 777, true, false, 'World'];
//
// console.log(arrT1_1);
// console.log(arrT1_2);
// console.log(arrT1_3);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arrT2 = [];
//
// arrT2[0] = 'Hello';
// arrT2[1] = 'World';
// arrT2[2] = true;
// arrT2[3] = false;
// arrT2[4] = 3.14;
//
// console.log(arrT2);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//     document.write(`
//         <div>${arrT2}</div>
//         <hr>
//     `);
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині


// for (let i = 0; i < 10; i++) {
//     document.write(`
//         <div>Движ с 10 блоков номер ${i}</div>
//         <hr>
//     `);
// }


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
//
// while (i < 20) {
//     document.write(`
//         <h1>Вот что внутри одного с масивов - ${arrT1_2}</h1>
//         <hr>
//     `);
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let j = 0;
// while (j < 20) {
//     document.write(`
//        <h1>Здесь у нас 20 блоков с номером - ${j}</h1>
//        <hr>
//     `);
//     j++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arr10 = [1, 2, 3.14, 4, 5, 6, 7, 8, 9, 10];
//
// for (let i = 0; i < arr10.length; i++) {
//     console.log(arr10[i]);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let arrStr = ['hello', 'okten', 'web', 'js', 'html', 'react', 'angular', 'vue', 'framework', 'front-end'];
//
// for (let i = 0; i < arrStr.length; i++) {
//     console.log(arrStr[i]);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arrMix = ['hello', 'world', true, 3.14, 2021, 'OktenWeb', false, 10, null, undefined];
// let k = 0;
// while (k < 10) {
//     console.log(arrMix[k]);
//     k++;
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arrMix10 = [3.14, true, 20.222, false, 'null', 'undefined', 'string', true, 2021, false];
//
// for (let i = 0; i < arrMix10.length; i++) {
//     if (typeof arrMix10[i] === 'boolean') {
//         console.log(arrMix10[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// for (let i = 0; i < arrMix10.length; i++) {
//     if (typeof arrMix10[i] === 'number') {
//         console.log(arrMix10[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// for (let i = 0; i < arrMix10.length; i++) {
//     if (typeof arrMix10[i] === 'string') {
//         console.log(arrMix10[i]);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let arrEmpty = [];
//
// arrEmpty[0] = 'string';
// arrEmpty[1] = 3.14;
// arrEmpty[2] = true;
// arrEmpty[3] = false;
// arrEmpty[4] = 2021;
// arrEmpty[5] = 'Hello, Okten';
// arrEmpty[6] = null;
// arrEmpty[7] = undefined;
// arrEmpty[8] = 5.56789;
// arrEmpty[9] = 'Alexandr Yatsenko';
//
// for (let i = 0; i < arrEmpty.length; i++) {
//     console.log(arrEmpty[i]);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
//     document.write(`
//         <h3>Шаг: ${i}</h3>
//         <hr>
//     `);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i <= 100; i++) {
//     console.log(i);
//     document.write(`
//         <h3>Шаг: ${i}</h3>
//         <hr>
//     `);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i <= 100; i += 2) {
//     console.log(i);
//     document.write(`
//         <h3>С шагом +2: ${i}</h3>
//         <hr>
//     `)
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//         document.write(`
//             <h4>Вывод только парных чисел: ${i}</h4>
//             <hr>
//         `)
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 1) {
//         console.log(i);
//         document.write(`
//            <h5>Мутим тоже самое что и выше, только с непарными - ${i}</h5>
//            <hr>
//         `);
//     }
// }

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
//
// let minute = 0,
//     second = 0;
// const count = 60;

// for (let i = 0; i < count; i++) {
//     console.log('минут: ' + minute++);
//
//     for (let i = 0; i < count; i++) {
//         console.log('секунд: ' + second++);
//     }
//
//     second = 0;
//     if (minute === 2) {
//         break;
//     }
// }


// - Відтворити роботу годинника, відрахувавши  2 години  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

// const count = 59;
// let hour = 0,
//     minute = 0,
//     second = 0;
//
// for (let i = 1; i <= count && hour !== 2 && minute !== 20; i++) {
//     hour = i;
//
//     for (let i = 0; i <= count; i++) {
//         minute = i;
//
//         if (hour === 1 && minute === 20) {
//             console.log(`${hour} : ${minute} : ${second}`);
//             // document.write(`<h4>${hour} : ${minute} : ${second}</h4>`);
//             break;
//         }
//
//         for (let i = 0; i <= count; i++) {
//             second = i;
//             console.log(`${hour} : ${minute} : ${second}`);
//             // document.write(`<h4>${hour} : ${minute} : ${second}</h4>`);
//         }
//
//         second = 0;
//     }
//
//     minute = 0;
// }

// Mentor tip

// for (let h = 0; h <= 2; h++) {
//     for (let m = 0; m < 60; m++) {
//         for (let s = 0; s < 60; s++) {
//             console.log(`${h}:${m}:${s}`);
//             if (h === 2 && m === 20) {
//                 m = 60;
//                 break;
//             }
//         }
//     }
// }


// Додатково

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let arrA = [ 'a', 'b', 'c'];
let  strA = "";

for (let i = 0; i < arrA.length; i++){
    strA = strA + arrA[i];
}

console.log(strA);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

let i = 0,
    strB = "";
while (i < arrA.length){

    strB = strB + arrA[i];
    i++;
}

console.log(strB);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let strC = "";

for (const string of arrA){
    strC = strC + string;
}
console.log(strC);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let strD = "";

for (const string in arrA){
    strD = strD + arrA[string];
}
console.log(strD);

// =================
// =================
// =================
// =================
//
// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

for (let i = 1; i <= 3; i++) {
    arrA.push(i);
}

console.log(arrA);

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

let arrNum = [1, 2, 3],
    arrResNum = '';
arrResNum = arrNum.reverse();
console.log(arrResNum);


// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
let arrPush = [1, 2, 3];

for (let i = 4; i <= 6; i++ ) {
    arrPush.push(i);
}

console.log(arrPush);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

for (let i = 4; i <= 6; i++) {
    arrPush.unshift(i);
}

console.log(arrPush);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

let arrLang = ['js', 'css', 'jq'];
const fistElem = arrLang.shift();
console.log(fistElem);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

const lastElem = arrLang.pop();
console.log(lastElem);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].

let arrN= [1, 2, 3, 4, 5];

let newArrSlice = arrN.slice(3);
console.log(newArrSlice);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].

let newArrSlice1 = arrN.slice(0, 2);
console.log(newArrSlice1);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].

let arrSplice = [1, 2, 3, 4, 5];

let newArrSplice = arrSplice.splice(1, 2);

console.log(arrSplice);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].

let arrSpliceS = [1, 2, 3, 4, 5];

// let newArrSpliceString = arrSpliceS.splice(3,0, 'a', 'b', 'c');
console.log(arrSpliceS);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

arrSpliceS.splice(1, 0, 'a', 'b');
arrSpliceS.splice(6,0, 'c');
arrSpliceS.splice(8, 0, 'e');

console.log(arrSpliceS);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arrNumbers.length; i++) {
    if (arrNumbers[i] % 2 === 0) {
        console.log(arrNumbers[i]);
    }
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

let arrNumbersAdd = [];

for (let i = 0; i < arrNumbers.length; i++) {
    arrNumbersAdd.push(arrNumbers[i]);
}

console.log(arrNumbersAdd);

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

let arrNumbersAdd1 = [];

for (let i = 0; i < arrNumbers.length; i++) {
    arrNumbersAdd1.unshift(arrNumbers[i]);
}

console.log(arrNumbersAdd1);

//
//
// ============
//
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let arrN10 = [2,17,13,6,22,31,45,66,100,-18];

//     1. перебрати його циклом while

while (i < arrN10.length) {
    console.log(arrN10[i]);
    i++;
}

//     2. перебрати його циклом for

for (let i = 0; i < arrN10.length; i++) {
    console.log(arrN10[i]);
}

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

let j = 0;

while (j < arrN10.length) {
    if (j % 2 !== 0) {
        console.log(arrN10[j])
    }
    j++;
}

//     4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = 0; i < arrN10.length; i++) {
    if (i % 2 !== 0) {
        console.log(arrN10[i]);
    }
}

//     5. перебрати циклом while та вивести  числа тільки парні  значення

j = 0;
while (j < arrN10.length) {
    if (j % 2 === 0) {
        console.log(arrN10[j]);
    }
    j++;
}

//     6. перебрати циклом for та вивести  числа тільки парні  значення

for (let i = 0; i < arrN10.length; i++) {
    if (i % 2 === 0) {
        console.log(arrN10[i]);
    }
}

//     7. замінити кожне число кратне 3 на слово "okten"

for (let i = 0; i < arrN10.length; i++) {
    if (arrN10[i] % 3 === 0) {
        arrN10[i] = 'okten';
        console.log(arrN10[i]);
    }
}

//     8. вивести масив в зворотньому порядку.

for (let i = arrN10.length; i >= 0; i--) {
    console.log(arrN10[i]);
}

//     9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//     10 створити пустий масив та :
const sum = 100;
let arr1 = [],
    arr2 = [];

//      - заповнити його 50 парними числами за допомоги циклу.

for (let i = 1; i <= sum; i++) {
    if (i % 2 === 0) {
        arr1.push(i);
    }
}

console.log(arr1);

//      - заповнити його 50 непарними числами за допомоги циклу.

for (let i = 1; i <= sum; i++) {
    if (i % 2 !== 0) {
        arr2.push(i);
    }
}

console.log(arr2);

// 1
// створити пустий масив та :
//     1. заповнити його 50 парними числами за допомоги циклу.
// 2. заповнити його 50 непарними числами за допомоги циклу.
// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.

let arr3 = [];
for (let u = 0; u < 10; u++){
    arr3[u] = Math.floor((Math.random()*(732-8))+8);
}
console.log(arr3);

//     диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
// 2. вывести на консоль  каждый третий елемент

for (let i = 2 ; i < arr3.length; i += 3){
    console.log(arr3[i]);
}

// 3. вывести на консоль  каждый третий елемент
// но при условии что его значение является парным.

for (let i = 2 ; i < arr3.length; i += 3){
    if (arr3[i] % 2 === 0){
        console.log(arr3[i]);
    }
}

// 4. вывести на консоль  каждый третий елемент
// но при условии что он имеет парное значение и
// записать их в другой массив.

let arr4 = [];
for (let i = 2 ; i < arr3.length; i += 3){
    if (arr3[i]%2 === 0){
        arr4.push(arr3[i]);
    }
}
console.log(arr4);

// 5. Вывести каждый елемент массива у которого соседний с права элемент - парный
// 5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
//
// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
// додати його в інший масив.