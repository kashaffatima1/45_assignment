//QUESTION NO:17
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.



//guest list from previous exercise
let guestArr : string[] = ["Sarah", "Aiza", "Arez", "Sehar", "Zain", "Aina"];

//print message
console.log("Unfortunately! new dinner table won’t arrive so we can invite only two people" );

//remove guest from the list
while(guestArr.length > 2) {
    let removedguest: string | undefined = guestArr.pop();
        if (removedguest !== undefined) {
            console.log(`Sorry ${removedguest}, we can not invite you.`)
        }  
}
//print a message to each of the two people in our list, letting them know they are still invited
guestArr.forEach(guest => 
    (console.log (`Dear ${guest} , you are still invited to the dinner`))

)

//remove last two name for the list
guestArr.splice(0,guestArr.length);

//print updated empty list
console.log("updated list of guest:", guestArr);


