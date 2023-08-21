// alert("Hello");
// alert("World");
// alert(3 + 2);
// alert("hello")[(1, 2)].forEach(alert);
// It added new features to the language and modified some of the existing ones.

// alert("some code");
// ("use strict");

// let message;
// message = "hello";
// console.log(message);
// let name = "hema",
//   age = 20;
// console.log(name);

// let hi = "hello javascript";
// let message;
// message = hi;
// console.log(hi);

// alert("not a number" / 2);
// console.log(NaN ** 0);
// console.log(NaN + 2);

// let str = "hello1";
// let str1 = `hello world ${str}`;
// console.log(str1);

//alert confirm prompt
// let age = prompt("How old are you?", 20);
// alert(`You are ${age} years old!`);
// let isBoss = confirm("Are you the boss?");

//typeconversion

// let value = true;
// console.log(typeof value);
// value = String(value);
// value = Number(value);
// value = Boolean(value);
// console.log(typeof value);
// console.log(typeof null + 1);

// console.log(Boolean("0"));
// console.log(Boolean(""));
// console.log(Boolean(" "));

//basic operator

// let x = 2;
// x = -x;
// console.log(x);

// let name = "r" + "hema";
// console.log(name);

// let value = 2;
// // value = "2" + 3 + 4;
// // value = 8 - 4 - "3";
// // value = "7" - 2 + 3;
// console.log(value);

// let orange = 2;
// let apple = 4;
// console.log(+orange + +apple);

// c = 2 + 2;
// b = c;
// a = c;
// console.log(c, b, a);
// let n = 2;
// n = n + 5;
// n = n * 2;
// console.log(n);

// let counter = 1;
// // counter = ++counter; //2
// // counter = counter++; // 1
// ++counter;
// counter++;
// console.log(2 * counter);

//comma operator

// let a = (2 + 1, 4 + 2); //Each of them is evaluated but only the
// console.log(a);//  result of the last one is returned.
// for (a = 1, b = 3, c = a * b; a < 10; a++) {
//   console.log(c);
// }

//comparsions

// let name = "Hema";
// let fname = "Hema";
// console.log(name == fname);

//branching statements

// let year = 2023;
// if ("") {
//   console.log("matches the year");
// } else {
//   console.log("doesnt matches");
// }

// let age = (year == 2022)? true : false;
// console.log(age);

//logical operators
// console.log(1 || 0);
// console.log(null || 0);
// console.log(undefined || null);
// console.log(undefined || 2);
// console.log(1 && 0);
// console.log(null && 0);
// console.log(undefined && null);
// console.log(undefined && 2);

// let first = null;
// let second = "Hema";
// console.log(first ?? second);

// let user = {
//   name: "hema",
//   rollno: 20,
// };
// console.log(user);
// user.age = 10;
// console.log(user);
// delete user.rollno;
// console.log(user);
// user["company"] = "sadana";
// console.log(user);
// user["timing"] = "20:08pm";
// console.log(user);
// delete user["timing"];
// console.log(user);
// console.log("name" in user);
// for (let key in user) {
//   console.log(key, user[key]);
// }
// users = {
//   10: "hema",
//   5: "poornima",
//   3: "rakesh",
// };
// console.log(users);

//copying

// let message = "Hello";
// let phrase = message;
// console.log(phrase);

// let user = {
//   name: "hema",
//   age: 25,
// };
// let admin = user;
// console.log(admin);

// admin.name = "poornima";
// console.log(admin);

//lopping

// let i = 0;
// while (i < 3) {
//   console.log(i);
//   i++;
// }

// let j = 4;
// do {
//   console.log(j);
//   j++;
// } while (j < 10);

// for (let k = 0; k < 4; k++) {
//   console.log(k);
// }

// let x = 2;
// switch (x) {
//   case 1:
//     console.log("first ");
//     break;
//   case 2:
//     console.log("second");
//     break;
//   default:
//     console.log("dont know");
// }

//functions

// function showMessage() {
//   console.log("Hello everyone");
// }
// showMessage();

// function showMessage() {
//   let message = "Hello";
//   console.log(message);
// }
// showMessage();
// console.log(message); //error

// let show = "Hello Hema";
// showM();
// function showM() {
//   console.log(show);
// }
// console.log(show);

function showMessage(from, text) {
  console.log(from + ":" + text);
}
showMessage("ann", "ant");
