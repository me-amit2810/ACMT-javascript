// Primitive (Stack Memory) -> inka origianl data change nhi hota hai, inki copy button
// Types: String, Number, Boolean, Undefined, Bigint, Null, Symbol

// Non- Primitive (Store in Heap Memory)-> Inka reference pass hota hai, Origianl data change ho skta hai

// Symbol -> aisa data type hai jo value ko unique banata hai.

const Rollnumber1 = Symbol("123");
const Rollnumber2 = Symbol("123");
// console.log(Rollnumber1 === Rollnumber2)  bhale hi '123' same hai but Rollnumber1 aur Rollnumber2 dono alag alag Symbol hai

// console.table([Rollnumber1, Rollnumber2])

const BigNumber = 4545456456564544564564n;
// console.log(typeof BigNumber);

// console.log(typeof null); // Output: object
// console.log(typeof undefined); // Output: undefined

// Example of non-primitive data type--->
// Object -> Data ko key and value ke pair me store krta hai
let user ={
    name: "Aditya",
    age: 50,
}

// console.log(user.name)  Accesing the value of object
// console.log(user.age);
// console.table([user.name, user.age])

// Array -> Collection of Similar data.
let arr1 = ["Shaktiman", "Flying Jatt", "Ra-one"]
// console.log(arr1[0])


// Function : Block of code hota hai jo call krne pr execute hota hai.
const myfunction = function(){
    console.log("Hello, World!");
}
myfunction() // function ko aise call krte hai