console.log(2 > 1); // true
console.log(2 < 1); // false
console.log(2 >= 2); // true
console.log(2 <= 1); // false
console.log(2 == "2"); // true (loose equality)
console.log(2 === "2"); // false (strict equality)
console.log(0 == false); // true (loose equality)
console.log(0 === false); // false (strict equality)
console.log(null == undefined); // true (loose equality)
console.log(null > 0); // false (strict equality)
console.log(null == 0); // false (strict equality)
console.log(null >= 0); // true (strict equality) // value of null is considered as 0 in this case but in other cases it is not considered as 0

console.log("2" > 1); // false (strict equality)
console.log("02" > 1); // false (strict equality)

// TYPESCRIPT DOES NOT ALLOW THIS TYPE OF COMPARISON BECAUSE IT CAN LEAD TO BUGS IN FUTURE
