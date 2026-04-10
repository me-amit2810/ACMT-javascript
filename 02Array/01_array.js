// // // collection of data

// // // array is a collection of data which is ordered and changeable. It allows duplicate members.

// // // creating an array
// // let arr = [1, 2, 3, 4, 5];
// // console.log(arr); 
// // console.log(typeof arr);
// // // new Array()
// // let arr2 = new Array("Shaktiman", "Motu", "Patlu", 1, true)
// // console.log(arr2);

// // console.log(arr2[1]);

// // // push() => Adding a element at the last index of the array

// // arr2.push("Flyingjatt")

// // console.log(arr2);
// // console.log(arr2.reverse());

// // console.log(arr2.includes(1));

// // arr2.pop()
// // console.log(arr2);



// // shitf() : remove an element from the first index of the array

// let arr3 = [1,2,3,4,5,6,9]
// arr3.shift()
// console.log(arr3);

// // unshift() : array ke starting me ek element ko add kr deta hai


// arr3.unshift(99)
// console.log(arr3);
// console.log(arr3.indexOf(4));


// join array ke elments ko add krke string me convert kr deta hai.

let myarr = ["a","b","c"]

myarr2 = myarr.join()

// console.log(myarr2);
// console.log(typeof  myarr2);


// Slice and Splice

let array5 = [1,2,3,4,5,6,7]  

// Slice(): array ka ek hissa (slice) nikal kr ek new array deta hai.
// original array me koi change nhi hota
// Slice(a,b) : a include hoga but b include nhi hoga(end index ko slice nhi krta) 

slice_Arr = array5.slice(0,-1)
console.log("reverse:",slice_Arr);

// `splice(startIndex, deleteCount)`:
// Original array se elements ko hata deta hai (ya add bhi kar sakta hai).
// Ye original array ko modify kar deta hai.
const myn2 = array5.splice(1, 3) // Index 1 se start karke 3 elements hata do.
console.log("C ", array5); // `MyArr` ab badal chuka hai.

console.log(myn2); // `myn2` me hataye gaye elements aa jate hain.











