const readlineSync = require('readline-sync');

var num1 = parseInt(readlineSync.question('Please enter your first number: '));
console.log('Your first number is ' + num1);

var num2 = parseInt(readlineSync.question('Please enter your second number: '));
console.log('Your second number is ' + num2);

var operation = readlineSync.question('Please enter the operation to perform: add, sub, mult, div ');
console.log('Your operation is ' + operation);


if (operation==="add") {
    function add() {
    let result = num1 += num2;
    console.log("The result is: " + result);
    }
    add();
}    
else if (operation==="sub") {
    let result = num1 - num2;
    function sub(num1,num2) {
        console.log("The result is: " + result);
    }
    sub();
}
else if (operation==="mult") {
    var result = num1 * num2;
    function mult(num1,num2) {
    console.log("The result is: " + result);
    }
    mult();
}
else if (operation==="div") {
    var result = num1/num2;
    function div(num1,num2) {
        console.log("The result is: " + result);
    }
    div();
}   
else {
    console.log("Sorry that is an incorrect operation. Try again.");
}