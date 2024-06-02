//QUESTION NO: 37
//Large Shirts: Modify the make_shirt() function so that shirts are large by default 
//with a message that reads I love TypeScript. Make a large shirt and a medium shirt 
//with the default message, and a shirt of any size with a different message.
function make_shirt(size = 'large', text = 'I LOVE TYPESCRIPT') {
    console.log(`\n Your order a ${size} shirt that says ${text}`);
}
make_shirt("Medium", "GUCCI");
export {};
