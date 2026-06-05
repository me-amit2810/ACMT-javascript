const user = {
    username: "Nandani❤️",
    price : 999,g

    WelcomeMessage: function (){
        console.log(`Hello ${this.username} jii, Welcome to Chai with Amit.`);
        console.log(this);
        
        
    }
}

user.WelcomeMessage()

// user.username = "Manish" 
// user.WelcomeMessage()

// console.log(this);


// function chai(){
//     let username = "Tanishka";
//     // console.log(this.username); udefinded "this" keyword works only with objects not in function.
    
// }

// chai()



// const chai = function(){
//     let username = "Tanishka";
//     console.log(this.username)
// }
// +++++++++++++++  Arrow Function +++++++++++++++++


const chai = ()=> {  
    let username = "Tanishka";
    console.log(this)
}
// chai()

const addTwo = (num1, num2) =>{
    return num1+num2
}

console.log(addTwo(5,9));


// const addTwo = (num1, num2) => (num1+num2)  implicit return => can be written without parenthesis.


// when we are using return keyword it is explicit return.


// const addTwo = (num1, num2) => ({username: "Amit"}) you have to wrap the object in parenthesis.

    











