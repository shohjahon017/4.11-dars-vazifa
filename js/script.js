//1-masala
// let arr = [1, 2, 3, 6, 9, 2, 8, 7];
// function oddElement(arg) {
//   let count = 0;
//   for (const element of arg) {
//     if (element % 2 == 0) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(oddElement(arr));

//2-masala
// let str = "sal3o6m";
// function getNumber(arg) {
//   let res = [];
//   for (const element of arg) {
//     if (element > 0) {
//       res.push(element);
//     }
//   }
//   return res;
// }
// console.log(getNumber(str));

//3-masala
// let str = "salom dunyo";
// function findWords(arg) {
//   return arg.trim().split(" ").length;
// }
// console.log(findWords(str)); //2

//4-masala
// let arr = [2, 6, 9, 3, 8, 6, 7];
// function minElement(arg) {
//   let min = arg[0];
//   for (const element of arg) {
//     if (min > element) {
//       min = element;
//     }
//   }
//   return min;
// }
// console.log(minElement(arr));

//5-masala
// let str = "hello";
// function reverseStr(arg) {
//   let res = arg.split("").reverse();
//   return res.join("");
// }
// console.log(reverseStr(str));

//6-masala
// function findDigitProduct(num) {
//   const l = num.toString().split("").map(Number);
//   let p = 1;
//   for (const element of l) {
//     p *= element;
//   }

//   return p;
// }
// console.log(findDigitProduct(153));

//7-masala
// let arr = [1, 8, 9, 10, 5, 2, 7];
// function sortElement(arg) {
//   return arg.sort(function (a, b) {
//     return b - a;
//   });
// }
// console.log(sortElement(arr));

//8-masala
// let str = "hello world";
// function deleteStr(arg, text) {
//   return arg.replace(text, "");
// }
// console.log(deleteStr(str, "hello"));

//9-masala
// let arr = ["olma", "anor", "banan"];
// function toUpperCase(arg) {
//   let res = [];
//   for (const element of arg) {
//     res.push(element.toUpperCase());
//   }
//   return res;
// }
// console.log(toUpperCase(arr));

//10-masala
// let arr = [1, 3, 6, 9, 8, 5, 7, 4];
// function oddElement(arg) {
//   let res = [];
//   for (const element of arg) {
//     if (element % 2 == 1) {
//       res.push(element);
//     }
//   }
//   return res;
// }
// console.log(oddElement(arr));

//11-masala
// let arr = ["nok", "mandarin", "olma", "anor"];
// function longestElement(arg) {
//   let longest = "";
//   for (const element of arg) {
//     if (element.length > longest.length) {
//       longest = element;
//     }
//   }
//   return longest;
// }
// console.log(longestElement(arr));

//12-masala
// let arr = [1, 5, 9, 7, 2, 8];
// function sumElement(arg) {
//   let sum = 0;
//   for (const element of arg) {
//     sum += element;
//   }
//   return sum;
// }
// console.log(sumElement(arr));

//13-masala
// let arr = [1, -6, 8, 1, -8, -7, -3, 5];
// function removeNegative(arg) {
//   let res = [];
//   for (const element of arg) {
//     if (element > 0) {
//       res.push(element);
//     }
//   }
//   return res;
// }
// console.log(removeNegative(arr));

//14-masala
// let arr = ["olma", "nok", "anjir", "behi"];
// function lengthElement(arg) {
//   let res = [];
//   for (const element of arg) {
//     res.push(element.length);
//   }
//   return res;
// }
// console.log(lengthElement(arr));

//15-masala
// let arr = [4, 5, 9, 3, 2, 8];
// function sqrtElement(arg) {
//   let res = [];
//   for (const element of arg) {
//     res.push(element ** 2);
//   }
//   return res;
// }
// console.log(sqrtElement(arr));

//16-masala
// let arr = [5, 5, 6, 9, 3, 1, 1, 5, 8];
// function uniqueElement(arg) {
//   let unique = [];
//   for (const element of arg) {
//     if (arg.indexOf(element) === arg.lastIndexOf(element)) {
//       unique.push(element);
//     }
//   }
//   return unique;
// }
// console.log(uniqueElement(arr));

//17-masala
// let arr = [1, 9, 3, 5, "salom", 5, 7, "xayr"];
// function reverseArray(arg) {
//   return arg.reverse();
// }
// console.log(reverseArray(arr));

//18-masala
// let arr = ["anor", "banan", "nok", "behi"];
// function sortElement(arg) {
//   return arg.sort();
// }
// console.log(sortElement(arr));

//19-masala
//  let arr = ["anjir", "banan", "kiwi", "behi"];
// function sortElement(arg) {
//   return arg.sort();
// }
// console.log(sortElement(arr));

//20-masala
// let str = "salom yaxshimisizlar";
// function toUpperCaseFirst(arg) {
//   let res = arg.split(" ").map((element) => {
//     return element[0].toUpperCase() + element.slice(1);
//   });
//   return res.join(" ");
// }
// console.log(toUpperCaseFirst(str));

//21-masala
// let str = "sa lom bolal ar";
// function removeSpace(arg) {
//   let res = [];
//   for (const element of arg) {
//     if (element != " ") {
//       res.push(element);
//     }
//   }
//   return res.join("");
// }
// console.log(removeSpace(str));

//22-masala
// let str = "hello world";
// function reverseElement(arg) {
//   return arg.split(" ").reverse().join(" ");
// }
// console.log(reverseElement(str));

//23-masala
// let arr = "olma, nok, anor";
// function lengthElement(arg) {
//   return arg.split(" ").map((element) => element.length);
// }
// console.log(lengthElement(arr));
