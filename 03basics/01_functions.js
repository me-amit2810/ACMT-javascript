// declaration
function sayMyname() {
  console.log("Amit");
}
// calling a function
// sayMyname();

// function addtwoNum(a, b) {
//   console.log(a + b);

// }
// console.log(addtwoNum(5, "a"));
function addtwoNum(a, b) {
  let result = a + b;
  return result;
}

const result = addtwoNum(5, 8);
// console.log("Result: ", result);

// While defining the function and whaterver we take as value is known as parameter.
// while executing the fuction or calling the function when we pass value is known as argumnents.

function loginUserMessage(username) {
  if (!username) {
    console.log("Please Enter a username.");
    return;
  }
  return `${username} just logged in!`;
}

// console.log(loginUserMessage("ACMT"));
// console.log(loginUserMessage());

function addToCart(...num) {
  //rest operator
  return num;
}

// console.log(addToCart(1,2,3,4,5));

const user = {
  username: "Shaktiman",
  price: 0,
};
function handleObj(anyobject) {
  console.log(
    `His name is ${anyobject.username} and price is ${anyobject.price}.`,
  );
}

handleObj(user);

handleObj({
  username: "Ironman",
  price: 999,
});

const myNewArray = [200, 300, 400, 500];
function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray));
