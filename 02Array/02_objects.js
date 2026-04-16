const tinderUser = {}

tinderUser.id = 1234;
tinderUser.name = "Samay";
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const InstaUser = {
    email: "insta@mail.com",
    "Full Name": {
        "first name" : "Amit",
        "Last name" :"Kumar"
    }
}


// console.log(InstaUser["Full Name"]["Last name"]);


const obj1 = {
    'a': 1,
    'b': 2
}
const obj2 = {
    'c': 3,
    'd': 4
}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2)
const obj3 = {...obj1, ...obj2, ...InstaUser, ...tinderUser}
console.log(obj3);
console.log(Object.keys(obj3));
console.log(Object.values(obj3));
console.table(Object.entries(obj3));
