// var c = 300;

// let a = 300;

// if(ture){
//     let a = 10;
//     const b = 20;
//     console.log("Inner: ", a);

// }

// console.log(a);
//console.log(b);
//console.log(c);

function one() {
  const username = "Amit";
  function two() {
    const website = "Youtube";
    console.log(username);
  }
  // console.log(website); cannot be accesed outside the function
  two();
}

// one()

if (true) {
  const username = "Amit";
  if (username === "Amit") {
    const website = " youtube";
    // console.log(username+website);
  }
}

// ++++++++++++++++++++ interesting ++++++++++++++++++++++

// console.log(addone(5)); we can call this function here or also run it

function addone(value) {
  return value + 1;
}

console.log(addone(5));


// console.log(addTwo(5)); we cannot call before declaration3'

const addTwo = function (value) {
  return value + 2;
};


console.log(addTwo(5));
