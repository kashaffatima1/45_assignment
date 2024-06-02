//QUESTION NO:24
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings

//• Tests using the lower case function

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array


// array
let person : string[] = ["Alisha", "Alisha"];

console.log("Alishba in the array", person.includes("Alishba"));

//not in array
let rides : string[] = ["Swing", "RollerCoster"];

console.log("not in array", rides.includes("Slides"));
//Equality 
console.log("Equality with strings", "kashaf" === "kashaf");

//Inequality
console.log("Inequality with strings", ("kashaf" as string) !== "fatima");

//lowercase function
console.log("lowercase function" , "HELLO".toLowerCase() === "hello");

//EQUALITY NUM
console.log("Equality Number", 12 == 12);

//Inequality Num
console.log("Inequality Number", (12 as number) !== 6 );

//greater and less then
console.log("less then", 12 < 29 );

console.log("greater then", 17 > 4);

//greater than or equal to, and less than or equal to

console.log("greater than or equal to", 77 >= 77);

console.log("less than or equal to", 5 <= 10);

//& 0r Or operator
console.log( "AND operator", 10 ==10 && 15 <16);

console.log("OR operator", 30 === 30 || true );

// array
person = ["Alisha", "Alisha"];

console.log("Alishba in the array", person.includes("Alishba"));

//not in array
rides = ["Swing", "RollerCoster"];

console.log("not in array", rides.includes("Slides"));