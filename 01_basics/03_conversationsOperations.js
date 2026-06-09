let score = 33 //use null,defined,booleanvalue(1,2)

console.log(typeof score); // String
console.log(typeof(score)); // String

let valueInNumber = Number(score)
console.log(typeof valueInNumber);  // Number
console.log(valueInNumber); // output NaN Not a Number


// "33" => 33
// "33abc" => NaN

// *********** operations ****************

let value = 3
let negValue = -value
console.log(negValue); // -3

console.log(2+2); 
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2); // modulus operator gives the remainder

let str1 = "Hello"
let str2 = " World"

let str3 = str1 + str2
console.log(str3); // "Hello World"

console.log("1"+2); // "12" string concatenation
console.log(1+"2"); // "12" string concatenation
console.log("1"+2+3); // "123" string concatenation
console.log(1+2+"3"); // "33" string concatenation

// These type of codes are rejected in BIG Companies 

console.log(+true); // 1 The unary + operator tries to convert its operand into a number.
//true → 1
//false → 0
console.log(+false); // 0
console.log(+""); // 0
console.log(+" "); // 0
console.log(+"abc"); // NaN

let num1 , num2 , num3
num1 = num2 = num3 = 2+2

console.log(num1,num2,num3); // 4 4 4

let gameCounter = 100
gameCounter++
console.log(gameCounter); // 101

++gameCounter
console.log(gameCounter); // 102

gameCounter--
console.log(gameCounter); // 100

gameCounter += 5
console.log(gameCounter); // 105

gameCounter -= 5
console.log(gameCounter); // 100

gameCounter *= 2
console.log(gameCounter); // 200

gameCounter /= 2
console.log(gameCounter); // 100

gameCounter %= 3
console.log(gameCounter); // 1  