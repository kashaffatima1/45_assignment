//QUESTION NO:44
//Sandwiches: Write a function that accepts a array of items a person wants
//on a sandwich. The function should have one parameter that collects as many
//items as the function call provides, and it should print a summary of the sandwich
//that is being ordered. Call the function three times, using a different number
//of arguments each time.
function make_sandwiche(items) {
    console.log("Making your sandwich with:");
    items.forEach(element => console.log("  " + element));
    console.log("Enjoy your sandwich!");
}
make_sandwiche(['Cheese', 'Lettuce', 'Tomato']);
make_sandwiche(['Ketchup', 'Cucumber']);
make_sandwiche(['Mayyonise', 'Extra spicy sauces']);
export {};
