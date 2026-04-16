const Mysym = Symbol("key1");

const user = {
  "Full name": "Amit Kumar",
  email: "amit@gmail.com",
  address: "Noida",
  age: 21,
  isLoggedIn: true,
  [Mysym]: "key1",
};
// console.log(typeof user.email);
// console.log(user["Full name"]);
// console.log(user["email"]);
// console.log(typeof user[Mysym]);

user["email"] = "abc@gmail.com";
// console.log(user["email"]);

// Object.freeze(object_name) ka use krke hum object ko freeze kr skte hai jisse baad me object ki ki bhi value change nhi hogi.

// Object.freeze(user);
// user["email"] = "123@gmail.com";

user.greeting = function() {
    console.log("Namsate bhai");
}
user.greeting2 = function() {
    console.log(`Namaste ${this["Full name"]}`);
    console.log(`Your Email is:  ${this.email}`);
}
console.log(user.greeting2());




