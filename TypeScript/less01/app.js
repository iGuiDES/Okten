// function multiplayer(a: number, b: number) {
//     return a * b;
// }
//
// let number = multiplayer(10, 20);
// console.log(number);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var EGender;
(function (EGender) {
    EGender["MALE"] = "male";
    EGender["FEMALE"] = "female";
})(EGender || (EGender = {}));
function userLogger(users) {
    users.forEach(function (user) {
        var _a;
        (_a = user.cars) === null || _a === void 0 ? void 0 : _a.forEach(function (car) {
            console.log(car.color);
        });
    });
}
var ivan = {
    age: 20,
    name: 'Ivan',
    wife: false,
    cars: [{ color: 'Black' }],
    gender: EGender.MALE,
    goWork: function () { }
};
// Important
var alex = {
    age: 27,
    name: 'Alex',
    wife: false
};
userLogger([ivan]);
// KEYOF
var keys = ["age", "cars", "name", "wife", "gender"];
function getValueOfKey(key) {
    console.log(ivan[key]);
}
getValueOfKey("wife");
// ABSTRACT CLASS
var ACar = /** @class */ (function () {
    function ACar(wheels, power) {
        this.wheels = wheels;
        this.power = power;
    }
    ACar.prototype.ride = function () {
        console.log("Ride with " + this.power * 2 + " km/h");
    };
    return ACar;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(wheels, power, color) {
        var _this = _super.call(this, wheels, power) || this;
        _this.color = 'Silver';
        return _this;
    }
    return Car;
}(ACar));
var vaz = new Car(4, 100);
vaz.ride();
console.log(vaz);
