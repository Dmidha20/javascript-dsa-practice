// Capitalize each word

const str = "hello world good morning";

const result = str
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log("result", result);
console.log([] == false);

// reverse a string
const name = "dhriti";
let res = "";

for (let i = name.length - 1; i >= 0; i--) {
  res = res + name[i];
}

console.log(res);

// remove duplicates
const a = [1, 2, 2, 3, 4, 4, 5];

const newArr = [...new Set(a)];

console.log(newArr);

let r = [];
for (let i = 0; i <= a.length - 1; i++) {
  if (!r.includes(a[i])) {
    r.push(a[i]);
  }
}

// count frequency

const arr = ["a", "b", "a", "c", "b", "a"];

const obj = {};

for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]]) {
    obj[arr[i]] = obj[arr[i]] + 1;
  } else {
    obj[arr[i]] = 1;
  }
}

console.log(obj);

// find max number

const arra = [10, 45, 2, 99, 23];

let max = arra[0];
for (let i = 0; i < arra.length; i++) {
  if (arra[i] > max) {
    max = arra[i];
  }
}

console.log(max);

// find missing number , sixe of array is n-1

const ar = [1, 2, 4, 5];

let n = ar.length + 1;

for (let i = 1; i <= n; i++) {
  if (!ar.includes(i)) {
    console.log(i);
  }
}

// palindrome

let b = "madam";

const re = b.split("").reverse().join("");

if (b === re) {
  console.log("b is palindrome");
}
