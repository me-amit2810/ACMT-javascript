// const num1 = 67;
// // console.log(typeof num1)
// // 'new Number()' ka use krke number ko object ki tarah banaya ja skta hai.
// const num2 = new Number(56);
// // console.log(typeof num2);
// // console.log(num2);
// num3 = num2.toString()
// console.log(typeof num3);

const balance = 5000;
// console.log(balance.toFixed(2));  Decimal ke baad kitne digit dikhane hai
const pii = 3.1436;

// console.log(pii.toFixed(1));

// 'toPrecision()' total kitne significant digits ke baad tak value ko round off krnba hai

// console.log(pii.toPrecision(3));

// const var1 = 5.59;
// console.log(var1.toPrecision(2));

const salary = 5000000000;
// toLocaleString('en-IN') number ko indian numbering system (commas ke sath) me format krta hai.
//  console.log(salary.toLocaleString('en-IN'));

// console.log(Math.max(1,3,4,5,6,5));

// *********************** Math ************************

// 'Math.abs()' (absolute) > negative ko positive me convert krta hai
// console.log(Math.abs(-5));

// 'Math.round()' number ko uske sabse paas wale integer me round kr deta hai.

// console.log(Math.round(10.6));

// 'Math.floor()' => number ko hamesha neeche ke integer me round kr deta hai.
// console.log(Math.floor(5.9));

// 'Math.ceil()' => number ko hamesha upar ke integer me round kr deta hai.
// console.log(Math.ceil(5.1));

// 'Math.random()' => 0 aur 1 ke bich me random number generate krta hai.
// console.log(Math.random());
// console.log(Math.floor(Math.random()*10+1));

// Kisi specific range ke andr number genrate krna

const min = 1;
const max = 6;

console.log(Math.floor(Math.random() * (max - min + 1) + min));
