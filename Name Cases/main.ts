//QUESTION NO: 03
//Name Cases: Store a person’s name in a variable, and then print that person’s 
//name in lowercase, uppercase, and titlecase.


let personName : string = "Kashaf Fatima";

//lowercase
console.log(personName. toLowerCase());

//uppercase
console.log(personName. toLocaleUpperCase());

//titlecase
console.log(personName.replace(/\bw/g,c =>c.toUpperCase()));

