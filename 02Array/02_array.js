const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman","flash","Batman"]


// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
//  ["thor", "Ironman", "Spiderman", ["Superman","flash","Batman"] ]
// console.log(marvel_heros[3][0]);

// `concat` method do arrays ko jodkar ek naya array return karta hai. Original arrays change nahi hote.

// let all_heroes = marvel_heros.concat(dc_heros)

// console.log(all_heroes);


// Spread Operator (...): Ye `concat` ka naya aur behtar alternative hai.
// Ye dono arrays ke saare elements ko alag-alag karke ek naye array me daal deta hai.

// all_heroes = [...dc_heros, ...marvel_heros]
// console.log(all_heroes);

// `flat(depth)` method nested arrays (array ke andar array) ko ek single array me convert karta hai.
// `depth` batata hai ki kitne level tak flatten karna hai. `Infinity` sabhi levels ko flatten kar dega.

const another_Arr = [1,2,3, [4,5,6], 7, [6, 7, [4, 5]]]

siingleArr = another_Arr.flat(Infinity)
console.log(siingleArr);

// `Array.isArray()` check karta hai ki di gayi value ek array hai ya nahi.
console.log(Array.isArray("Amit Kumar")); // Output: false

// `Array.from()` kisi bhi cheez se (jaise string) ek naya array bana deta hai.
console.log(Array.from("Amit Kumar")); // Output: ['A', 'm', 'i', 't', ' ', 'K', 'u', 'm', 'a', 'r']

let score1 = 100
let score2 = 200
let score3 = 300

// `Array.of()` alag-alag elements se ek naya array bana deta hai.
console.log(Array.of(score1, score2, score3)) // Output: [100, 200, 300]

