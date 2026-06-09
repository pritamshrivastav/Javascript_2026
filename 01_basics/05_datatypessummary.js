// Primitive data types in JavaScript
// 7 types : String , Number , Boolean , Null , Undefined , Symbol , BigInt


const score = 100
//const score:number = 100 (this is typescript syntax, not javascript)
constscoreValue = "100.3" // string
const isLoggedIn = false // boolean
const uid = Symbol("1234") // symbol
const anotherUid = Symbol("1234") // symbol

console.log(uid === anotherUid); // false because symbol is unique

const bigNumber = 9007199254740991n // BigInt


// Reference data types in JavaScript (Non-primitive data types)
// Object , Array , Function