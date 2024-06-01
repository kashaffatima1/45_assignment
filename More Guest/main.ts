//QUESTIO NO: 16
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

//guest list from ex 15
let guestArr : string[] = ["Hiba", "Arez", "Sehar", "zain"]
console.log("Good News! we found a bigger dinner table");

//add new guest in the beginning of your array
guestArr.unshift("Sarah");

//new guest to the middle of array
guestArr.splice((guestArr.length/3),1, "Aiza");

//add one new guest in the end of array
guestArr.push("Aina");

//print a message
guestArr.forEach(guest => 
    (console.log (`Dear ${guest} , you are invited to the dinner`))

)
