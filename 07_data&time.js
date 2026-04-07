// Dates

//  'new Date()' se abhi ki current date aur time ka object ban jata hai.

let mydate = new Date();
// console.log(mydate);
// console.log(typeof mydate);

// console.log(mydate.toString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toISOString());


// let myDate = new Date(2025,1,15, 4, 40, 50)    (Year, Month, Day, Hours, Minutes, Seconds)
// let myDate = new Date(2025,1,15)     (Year, Month, Day)

// let myDate = new Date("2025-01-15")
// console.log(mycreatedDate.toLocaleString());
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());




// 'Date.now()' 1st January 1970 se abhi tak ke millieseconds (timestamp) deta hai.
let myTimeStamp = Date.now()
// Millisecond to second 
console.log(Math.floor((myTimeStamp/1000)));

let myDate = new Date(2025,1,15, 4, 40, 50)

console.log(myDate.getMonth());
console.log(myDate.getTime());



