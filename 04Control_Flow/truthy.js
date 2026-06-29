const userEmail = []
// if string is empty then it is assumed as false else true.

if (userEmail){
    console.log("Got user's mail");   
} else{
    console.log("Didn't get the user's mail"); 
}

// Falsy Value: false, 0, "", -0, Bigint 0n, null, undefined, Nan
// Truthy Value: "0", 'false', " ",  [], {}, function(){}


if(userEmail.length === 0){
    console.log("Array is Empty");
    
}


const EmptyObect = {}

if(Object.keys(EmptyObect).length === 0){
    console.log("Object is Empty");  
}


// Nullish Coalescing Operator(??): null undefinded

let val1;

val1 = 0 ?? 10;

console.log(val1);

val2 = null ?? undefined

console.log(val2);

val3 = undefined ?? null
console.log(val3);

val4 = undefined ?? null ?? 20

console.log(val4);

val5 = undefined ?? 10

console.log(val5);


//  Terniarry Operator

// condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice <=180 ? console.log("less than 180") : console.log("more than 180");





