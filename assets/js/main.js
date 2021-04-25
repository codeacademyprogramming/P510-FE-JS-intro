// Data Types

//* number, string, boolean, object, undefined //

// value types :  number, string, boolean, undefined
// reference type : object

// const num = 100;
// console.log(typeof num);

// const word = "Hello world";
// console.log(typeof word);

// const boolean = true;
// console.log(typeof boolean);

// const object = {
//   firstname: "Elnur",
//   lastname: "Abbaszade",
// };

// console.log(typeof object);

// let number = 5;

// console.log(typeof typeof number);

// const nullish = null;

// console.log(typeof nullish);

// const array = [];

// console.log(typeof array);

// Pass by value & Pass by reference

function myFunction(reference) {
  // reference:  {firstname: "Samir"}
  reference.firstname = 2;
  reference.lastname = "Something";
}

let obj = {
  firstname: "Samir",
};

myFunction(obj);

// obj = {firstname: "Eflatun"} after running the function

// console.log(obj);

// console.log(obj);

// obj = {firstname: "Qubad"} after changing it manually

// console.log(obj);

let number = 100;

function anotherFunction(num) {
  num = 200;
  //   console.log(num, "from inside function");
}

anotherFunction(number);

// console.log(number, "From inside");

function sumOfTwoNumber(number1, number2) {
  return number1 + number2;
}

// console.log(sumOfTwoNumber(5, 25));

const result = sumOfTwoNumber(30, 45);

const personObject = {
  firstname: "Samir",
  lastname: "Dadash",
  getFullname: function () {
    return "Salam " + this.firstname + " " + this.lastname;
  },
};

function getFullName(obj) {
  return `Salam ${obj.firstname + " " + obj.lastname}`;
}

// console.log(getFullName(personObject));

// console.log(personObject.getFullname());

// Truthy vs Falsy

function isAllowed(age) {
  if (age) {
    console.log("age is truthy value");
    if (age > 18) {
      return true;
    } else {
      return false;
    }
  } else {
    console.log(age, "age is falsy value");
  }
}

// isAllowed();
// isAllowed(null);
// isAllowed(0);
// isAllowed("");
// isAllowed(" ");

// console.log(5 == "5");
// console.log(5 === 5);

const obj1 = {
  firstname: "Tural",
  lastname: "Suleymanli",
};

const obj2 = {
  firstname: "Tural",
  lastname: "Suleymanli",
};

// console.log(obj1 === obj2);

const enumFason = {
  MONDAY: "MONDAY",
  TUESDAY: "TUESDAY",
};

// const number = 100;

// switch (number) {
//   case 100:
//     console.log("value is 100");
//     break;
//   case 300:
//     console.log("value is 300");
//     break;
//   default:
//     break;
// }

let num = 5;

while (num < 100) {
  //   console.log(num);
}
