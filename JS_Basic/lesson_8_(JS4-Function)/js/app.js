// 1) створити функцію яка приймає масив та виводить його
console.log(`// 1) створити функцію яка приймає масив та виводить його`);

const outArr = (array) => {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}

outArr([4, 5, 6]);

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
console.log(`// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.`);

const outRandom = (min, max, length) => {
    let array = [];
    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * (max - min + 1)) + min;
        array.push(random);
    }

    return array;
}

const newArr = outRandom(2, 5, 10);
outArr(newArr);

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
console.log(`// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)`);

// let outMin = function outMin(m1, m2, m3) {
//     if (m1 < m2 && m1 < m3) {
//         console.log(m1);
//     } else if (m2 < m1 && m2 < m3) {
//         console.log(m2);
//     } else if (m3 < m1 && m3 < m2) {
//         console.log(m3);
//     }
// }
//
// outMin(7, 3.14, 49);

const outMin = (n1, n2, n3) => {
    let array = [n1, n2, n3];
    let min = n1;
    for (const arrayElement of array) {
        if (min > arrayElement) {
            min = arrayElement;
        }
    }
    console.log(min);
}

outMin(48, 90, 3.14);


// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
console.log(`// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)`);
// 5) створити функцію яка повертає найбільше число з масиву
console.log(`// 5) створити функцію яка повертає найбільше число з масиву`);
// 6) створити функцію яка повертає найменьше число з масиву
console.log(`// 6) створити функцію яка повертає найменьше число з масиву`);

const outMax = (n1, n2, n3) => {
    let array = [n1, n2, n3];
    let min = n1;
    for (const arrayElement of array) {
        if (min < arrayElement) {
            min = arrayElement;
        }
    }
    console.log(min);
};

outMax(3.14, 101, 77);

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
console.log(`7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.`);

const outSum = (array) => {
    let result = 0;
    for (const arrayElement of array) {
        result += arrayElement;
    }
    return result;
}

console.log(outSum([45, 5, 3.14]));

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
console.log(`// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.`);

const outSumMiddle = (array) => {
    let result = 0;
    for (const arrayElement of array) {
        result += arrayElement;
    }
    return result / array.length;
}

console.log(outSumMiddle([45, 5, 3.14]));

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
console.log(`// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів`);

let arrayOfObj = [{name: 'Dima', age: 13}, {model: 'Camry'}];

const keysArr = (array) => {
    let result = [];

    for (const obj of array) {
        for (const key in obj) {
            result.push(key);
        }
    }

    return result;
}

console.log(keysArr(arrayOfObj));

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
console.log(`// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів`);

let arrayOfObjVal = [{name: 'Dima', age: 13}, {model: 'Camry'}];

const valueArr = (array) => {
    let result = [];

    for (const obj of array) {
        for (const key in obj) {
            result.push(obj[key]);
        }
    }

    return result;
}

console.log(valueArr(arrayOfObjVal));

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.

console.log(`// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив. РЕЗУЛЬТАТ === [3,5,7,9]`);
const splitArr = (arr1, arr2) => {
    let newArr = [];

    for (let i = 0; i < arr1.length; i++) {
        newArr[i] = arr1[i] + arr2[i];
    }

    return newArr;
}

console.log(splitArr([1, 2, 3, 4], [2, 3, 4, 5]));
// ============================================================================================
//
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//     Що б я міг сам вибрати повернути мені масив ключів чи масив значень.
console.log(`
    // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//     Що б я міг сам вибрати повернути мені масив ключів чи масив значень.
`)

let arrayOfObjAndValue = [{name: 'Dima', age: 13}, {model: 'Camry'}];

const keysArrAndValues = (array, bool) => {
    let result = [];

    if (bool) {
        for (const obj of array) {
            for (const key in obj) {
                result.push(key);
            }
        }
    } else {
        for (const obj of array) {
            for (const key in obj) {
                result.push(obj[key]);
            }
        }
    }



    return result;
}

console.log(keysArrAndValues(arrayOfObjAndValue, ));

// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// Splice

const zero = (array) => {
    let numArr = [];
    let zeroNum = [];

    for (const item of array) {
        if (item === 0) {
            zeroNum.push(item);
        } else {
            numArr.push(item);
        }
    }

    console.log(numArr);
    console.log(zeroNum);
    return numArr.concat(zeroNum);
}

console.log(zero([1, 0, 6, 0, 3]));

// - Дано список імен.
// Trim
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '

// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
// ============================================================================================
// // ******************* НАЗАД В МИНУЛЕ *********************** //
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
// // ******************* НАЗАД В МИНУЛЕ *********************** //