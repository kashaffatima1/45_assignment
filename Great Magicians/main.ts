//QUESTION NO: 42
//Great Magicians:Start with a copy of your program from Exercise 39.
//Write a function called make_great() that modifies the array of magicians by adding
//the phrase the Great to each magician’s name. Call show_magicians() to
//see that the list has actually been modified.
 
let Magicians : string[] = ["Kashaf", "Zain", "Reem"];

function make_great (magiciansArray : string []){
    for (let i=0 ; i<magiciansArray.length; i++){
        Magicians[i] = 'The great' + " " + Magicians[i]
    }
};
function show_magicians(Magicians:string[]): void {
    for(const magician of Magicians) {
        Magicians.forEach (element => {
            console.log(element)
        })
    }
};

make_great(Magicians);
show_magicians(Magicians);
