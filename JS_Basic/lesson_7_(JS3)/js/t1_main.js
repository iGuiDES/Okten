// - Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// a) отримує текст з параграфа з id "content"
let paragraphAbyID = document.getElementById('content');
let paragraphAbyClassName = document.getElementsByClassName('content');
let paragraphAbyTagName = document.getElementsByTagName('p');

// b) отримує текст з блоку з id "rules"
let divBbyID = document.getElementById('rules');
let divBbyClassName = document.getElementsByClassName('rules');
let divBbyTagName = document.getElementsByTagName('div');

// c) замініть текст параграфа з id 'content' на будь-який інший
paragraphAbyID.innerHTML = `<h3>Hello, Okten</h3>`;

// d) замініть текст параграфа з id 'rules' на будь-який інший
divBbyID.innerHTML = `<h3>Complete task 1-D!</h3>`;

// e) змініть кожному елементу колір фону на червоний
for (const singElemA of paragraphAbyTagName) {
    singElemA.style.backgroundColor = 'red';
    singElemA.style.color = 'blue';
}

// f) змініть кожному елементу колір тексту на синій
for (const singElemDiv of divBbyTagName) {
    singElemDiv.style.backgroundColor = 'red';
    singElemDiv.style.color = 'blue';
}

// g) отримати весь список класів елемента з id=rules і вивести їх в console.log
let allRules = document.getElementById('rules');
console.log(allRules);

// h) отримати всі елементи з класом fc_rules

let allElemFC = document.getElementsByClassName('fc_rules');
console.log(allElemFC);
let allElemFC1 = document.getElementsByClassName('fc_rules').length;
console.log(allElemFC1);

// i) поміняти колір тексту у всіх елементів fc_rules на червоний

for (const singElemFC of allElemFC) {
    singElemFC.style.color = 'red';
}

// Task 2
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
    name: 'max',
    age: 30,
    status: true,
    address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
    name: 'max',
    age: 31,
    status: true,
    address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];

// 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement.
//     Вставити цей блок на сторінку

for (const userName of users) {

    const divElem = document.createElement('div');
    divElem.classList.add('mCenter');
    divElem.innerHTML = userName["name"];
    document.body.appendChild(divElem);
}

// 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Блок з адресою зробити окремим блоком, з блоками для кожної властивості


for (const addressUser of users) {

    const divElemAddrFull = document.createElement('div');
    divElemAddrFull.classList.add('content');
    document.body.appendChild(divElemAddrFull);

    const divElemAddrCity = document.createElement('div');
    divElemAddrCity.classList.add('content_addr');
    const divElemAddrCountry = document.createElement('div');
    divElemAddrCountry.classList.add('content_addr');
    const divElemAddrStreet = document.createElement('div');
    divElemAddrStreet.classList.add('content_addr');
    const divElemAddrHouse = document.createElement('div');
    divElemAddrHouse.classList.add('content_addr');

    divElemAddrCity.innerHTML = addressUser.address['city'];
    divElemAddrCountry.innerHTML = addressUser.address['country'];
    divElemAddrStreet.innerHTML = addressUser.address['street'];
    divElemAddrHouse.innerHTML = addressUser.address['houseNumber'];

    divElemAddrFull.appendChild(divElemAddrCity);
    divElemAddrFull.appendChild(divElemAddrCountry);
    divElemAddrFull.appendChild(divElemAddrStreet);
    divElemAddrFull.appendChild(divElemAddrHouse);

}

//______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)
// b) робить шириниу елементу ul 400px
// c) робить шириниу всіх елементів з класом linkList шириною 50%
// d) отримує текст який зберігається в елементі з класом listElement2
// e) отримує всі елементи li та змінює ім колір фону на сірий
// f) отримує всі елементи 'a' та додає їм клас anchor
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// l) отримати елементи p та змінити їм padding на 20px
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
//
// 2) Є масив котрий характеризує правила.
//     Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html
//
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     }
// ];
//
// ===========================================================================
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]