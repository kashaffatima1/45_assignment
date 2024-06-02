//QUESTION NO:32
//Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users.
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
//Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
//• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not e accepted.
let current_users = ["Maryam", "Samar", "Dania", "Umna", "Malaika"];
let new_users = ["Samar", "Maryam", "Aliya", "Azlan", "Warisha"];
let current_users_lower = current_users.map(user => user.toLowerCase());
for (let new_user of new_users) {
    if (current_users_lower.indexOf(new_user.toLowerCase())) {
        console.log(`sorry ${new_user}, that name is taken.`);
    }
    else {
        console.log(`Yes ${new_user}, is still in avaliale list.`);
    }
}
;
export {};
