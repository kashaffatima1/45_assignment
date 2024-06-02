//QUESTION NO: 43
//Unchanged Magicians: Start with your work from Exercise 40. Call the
//function make_great() with a copy of the array of magicians’ names. Because the
//original array will be unchanged, return the new array and store it in a separate array.
//Call show_magicians() with each array to show that you have one array of the original
//names and one array with the Great added to each magician’s name.
let Magicians = ["Kashaf", "Zain", "Reem"];
function copyArray(Array) {
    return [...Array];
}
function make_great(magiciansArray) {
    for (let i = 0; i < magiciansArray.length; i++) {
        Magicians[i] = 'The great' + " " + Magicians[i];
    }
}
;
function show_magicians(Magicians) {
    for (const magician of Magicians) {
        Magicians.forEach(element => {
            console.log(element);
        });
    }
}
;
const copyMagicianArray = copyArray(Magicians);
make_great(copyMagicianArray);
console.log('\nThis is my original Array:');
show_magicians(Magicians);
console.log('\nThis is my modified copy of Array:');
show_magicians(copyMagicianArray);
export {};
