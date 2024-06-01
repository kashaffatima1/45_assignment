//QUESTION NO: 18
//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.

//• Print your array in its original order.

//• Print your array in alphabetical order without modifying the actual list.

//• Show that your array is still in its original order by printing it.

//Print your array in reverse alphabetical order without changing the order of the original list.

//• Show that your array is still in its original order by printing it again.

//• Reverse the order of your list. Print the array to show that its order has changed.

//Reverse the order of your list again. Print the list to show it’s back to its original order.

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed•

let locations : string[] = ["Maldives", "Bali", "Singapore", "Pakistan", "Qatar"];
console.log("original order" ,locations);

//Print the array in alphabetical order
console.log("Alphabetical order" + [...locations].sort());

//Print the array is still in its original order 
console.log("original order after sorting" , locations);

//Print the array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse alphabetical order", [...locations].sort().reverse());

//print the array is still in its original order by printing it again.
console.log("original order", locations);

//Reverse the order of the list. Print the array to show that its order has changed.
console.log("Reverse alphabetical order", [...locations].sort().reverse());

//Reverse the order of the list again. Print the list to show it’s back to its original order.
console.log("original order", locations);

//print the array so it’s stored in alphabetical order.
console.log(" Alphabetical order" + [...locations].sort());

//Sort to change the array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Sorted in reverse alphabetical order", [...locations].sort().reverse());


