// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
//     Оперативна память.
//     Потужність процесора. (цифра від 0 до 1000)
//     Назва.
//     В кожного компютера має бути метод включання.
// ===
class Computers {
    constructor(ram = 8, cpu = 400, name = 'NewPC', onPC = 'off') {
        this.ram = ram;
        this.cpu = cpu;
        this.name = name;
        this.onPc = onPC;
    }

    clickButton() {
        this.onPc = 'on';
    }

}

let pc = new Computers(4, 200, 'BasicPC', undefined);
console.log(`_________DEFAULT_________`);
console.log(pc);
console.log(`_________ACTION_________`);
pc.clickButton();
console.log(pc);


// Від базового компютрера треба реалізувати ноутбук.
//     Він має нову властивість дюймаж монітора.
//
//     У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
// ===

class Laptop extends Computers {
    constructor(ram, cpu, name, onPC, diagonal) {
        super(ram, cpu, name, onPC, diagonal);
        this.diagonal = diagonal;
    }

    performanceBattery() {
        let pB = this.ram / (this.diagonal * this.ram);
        console.log(pB);
    }

}

let mac = new Laptop(16, 600, 'Laptop', undefined, 15);
console.log(`_________DEFAULT_________`);
console.log(mac);
console.log(`_________ACTION_________`);
mac.clickButton();
mac.performanceBattery();
console.log(mac);

// Від ноутбука потрібно зробити ультрабук.
//     Він має нову змінну ваги.
//     При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
// ===

class UltraBook extends Laptop {
    constructor(ram, cpu, name, onPC, diagonal, weight, workBattery) {
        super(ram, cpu, name, onPC, diagonal, weight, workBattery);
        this.weight = weight;
        this.workBattery = workBattery;
    }

    clickButton() {
        if (this.weight >= 2 && this.workBattery <= 4) {
            this.onPc = `Power on ERROR single weight = ${this.weight} and battery = ${this.workBattery} exceed permissible values`;
            console.log(`Power on ERROR!!!`);
        } else {
            this.onPc = 'on';
            console.log(`Computer is on`);
        }
    }
}

let ultra = new UltraBook(8, 400, 'Ultrabook', undefined, 13, 1.50, 4);
console.log(`_________DEFAULT_________`);
console.log(ultra);
console.log(`_________ACTION_________`);
ultra.clickButton();
console.log(ultra);

// Від базвого класу потрібно створити базовий ПК.
//     В нього має бути новий метод запуску ігор.
//     Кількість FPS визначається як потужність / опервтивку.
//     Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`

class AlonePC extends Computers {
    constructor(ram, cpu, name, onPC, game, fps) {
        super(ram, cpu, name, onPC, game, fps);
        this.game = game;
        this.fps = 0;
    }

    gameStart() {
        this.fps = this.cpu / this.ram;
        console.log(`You are playing ${this.game} with ${this.fps} FSP`);
    }
}

let homePC = new AlonePC(8, 200, 'HOME-PC', undefined, 'Cyberpunk 2077', undefined);
console.log(`_________DEFAULT_________`);
console.log(homePC);

console.log(`_________ACTION_________`);
homePC.clickButton();
homePC.gameStart();
console.log(homePC);

// Компютер можна апгрейдити.
//     Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
//     Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
//     Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
// ===

class Upgrade extends AlonePC {
    constructor(ram, cpu, name, onPC, game, fps, blockBoost) {
        super(ram, cpu, name, onPC, game, fps, blockBoost)
    }


    boostPC() {
        if (this.cpu === this.cpu && this.ram === this.ram) {
            this.cpu += 100;
            this.ram += 4 + 4;
            console.log(`Game PC upgrade CPU - ${this.cpu} and RAM - ${this.ram}`);
        }
    }
}

let gamePc = new Upgrade(undefined, undefined, 'GamePC', undefined, 'GTA 5');
console.log(`_________DEFAULT_________`);
console.log(gamePc);

console.log(`_________ACTION_________`);
gamePc.boostPC();
gamePc.clickButton();
gamePc.gameStart();
console.log(gamePc);

// Від базового ПК необхідно зробити ігнорий ПК.
//     Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
//     При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно ивдати помилку,
//     що на цьому відрі ігри не запускаються.

class IgnorePC extends AlonePC {
    constructor(ram, cpu, name, onPC, game, fps) {
        super(ram, cpu, name, onPC, game, fps);

    }

    startedGame() {
        if (this.game === this.game && this.cpu > 500 && this.ram > 8) {
            let powerGame = (this.cpu * 0.1) / 100;
            this.cpu -= powerGame;
        } else {
            console.log(`На цьому відрі ігри не запускаються.`);
        }
    }
}

let ignorePc = new IgnorePC(24, 1000, 'IgnorePC', undefined, 'Cyberpunk 2077', undefined);
console.log(`_________DEFAULT_________`);
console.log(ignorePc);
console.log(`_________ACTIVE_________`);
ignorePc.clickButton();
ignorePc.gameStart();
ignorePc.startedGame();
console.log(ignorePc);

// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

let Cars = function Cars(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    this.drive = () => {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    this.info = () => {
        console.log(`одель: ${this.model}, Производитель: ${this.manufacturer}, Год изготовления: ${this.year}, Максимальная скорость: ${this.maxSpeed}, Объём двигателя: ${this.engineVolume}`);
    }

    this.increaseMaxSpeed = (newSpeed) => {
        this.maxSpeed = newSpeed;
    }

    this.changeYear = (newValue) => {
        this.year = newValue;
    }

    this.addDriver = (driver) => {
        this.driver = driver;
    }
}

const carsF = new Cars('lanos', 'Ukraine', 2010, 180, 1.6);
carsF.drive();
carsF.info();
carsF.increaseMaxSpeed(160);
carsF.changeYear(2001);
carsF.addDriver('Yatsenko');
console.log(carsF);

// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

class NewCars {
    constructor(model, manufacturer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        console.log(`Модель: ${this.model}, Производитель: ${this.manufacturer}, Год изготовления: ${this.year}, Максимальная скорость: ${this.maxSpeed}, Объём двигателя: ${this.engineVolume}`)
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed;
    }

    changeYear(newYear) {
        this.year = newYear;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

let audi = new NewCars('Audi', 'Germany', 2021, 280, 2.5);
console.log(audi);
audi.drive();
audi.info();
audi.increaseMaxSpeed(320);
audi.changeYear(2021);
audi.addDriver('Yatsenko');
console.log(audi);

// -створити класс попелюшка з полями ім'я, вік, розмір ноги
class Cinderellas {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
// --Створити 10 попелюшок , покласти їх в масив
let arrCinderellas = [];

// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги

arrCinderellas.push(new Cinderellas('Alina', 28, 36));
arrCinderellas.push(new Cinderellas('Sveta', 22, 34));
arrCinderellas.push(new Cinderellas('Karyna', 23, 38));
arrCinderellas.push(new Cinderellas('Mary', 24, 37));
arrCinderellas.push(new Cinderellas('Olga', 25, 39));
arrCinderellas.push(new Cinderellas('Angelika', 26, 41));
arrCinderellas.push(new Cinderellas('Vika', 27, 40));
arrCinderellas.push(new Cinderellas('Lena', 28, 33));
arrCinderellas.push(new Cinderellas('Kris', 29, 35.5));
arrCinderellas.push(new Cinderellas('Tanya', 30, 36.5));
console.log(arrCinderellas);

class Prince {
    constructor(name, age, findFootSize) {
        this.name = name;
        this.age = age;
        this.findFootSize = findFootSize;
    }

// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

    chooseCinderella() {
        let find;
        for (const cinderella of arrCinderellas) {
            if (this.findFootSize === cinderella.footSize) {
                find = cinderella.name;
            }
        }
        return console.log(`${this.name} нашел золушку, которая должна быть ним, её зовут - ${find}`);
    }
}
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
let prince = new Prince('Dan', 30, 41);
console.log(prince);
prince.chooseCinderella();

