// function multiplayer(a: number, b: number) {
//     return a * b;
// }
//
// let number = multiplayer(10, 20);
// console.log(number);

// function multiPlayer(a: number, b: number): void {
//     console.log(a * b);
// }
// let result = multiPlayer(10, 10);
// console.log(result);

// class Car {
//     protected year: number;
//     private producer: string;
//     public power: number = 200;
//
//     constructor(year: number, producer: string) {
//         this.year = year;
//         this.producer = producer;
//     }
//
//     changePower(newPower: number): void {
//         this.power = newPower;
//     }
// }
//
// class SuperCar extends Car {
//     public color: string;
//
//     constructor(year: number, producer: string, color: string) {
//         super(year, producer);
//         this.color = color;
//     }
// }
// const carV = new Car(2010, 'Audi');
// const superCar = new SuperCar(2020, 'BMW', 'black');
//
// console.log(carV);
// console.log(superCar);

// const user = {
//     name: 'Alexandr',
//     laptop: {
//         model: 'Macbook',
//         memory: 12
//     },
//
//     car: {
//         year: 2020
//     },
//
//     // bike: {
//     //     price: {
//     //         currency: 1000
//     //     }
//     // }
// }
//
// // console.log(user.laptop);
// // console.log(user?.bike?.price?.currency);

// let names: string[] = ['Vova', 'Anton', 'Dimas'];
// names = ['Kris'];
// let names2: Array<string | number> = [];

// ENUM

enum EGender {
    MALE = 'male',
    FEMALE = 'female'
}

interface ICar {
    color: string,
}

interface IUser {
    age: number,
    name: string
    wife?: boolean,
    cars?: [ICar],
    gender: EGender,
    goWork: Function,
}

function userLogger(users: Array<IUser>): void {
    users.forEach((user) => {
        user.cars?.forEach(car => {
            console.log(car.color);
        })
    })
}

let ivan: IUser = {
    age: 20,
    name: 'Ivan',
    wife: false,
    cars: [{color: 'Black'}],
    gender: EGender.MALE,
    goWork: () => {},
}

// Important

let alex: Partial<IUser> = {
    age: 27,
    name: 'Alex',
    wife: false,
}

userLogger([ivan]);

// KEYOF

const keys: Array<keyof IUser> = ["age", "cars", "name", "wife", "gender"];

function getValueOfKey(key: keyof IUser) {
    console.log(ivan[key]);
}

getValueOfKey("wife");

// ABSTRACT CLASS

abstract class ACar {
    wheels: number;
    power: number;

    constructor(wheels: number, power: number) {
        this.wheels = wheels;
        this.power = power;
    }

    ride() {
        console.log(`Ride with ${this.power * 2} km/h`);
    }
}
class Car extends ACar {

    color: string = 'Silver';

    constructor(wheels: number, power: number, color?: string) {
        super(wheels, power);
    }
}

const vaz = new Car(4, 100);
vaz.ride();
console.log(vaz);