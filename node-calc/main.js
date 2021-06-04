const readlineSync = require('readline-sync');

var num1 = readlineSync.question('Please enter your first number: ');
console.log('Your first number is ' + num1);

var num2 = readlineSync.question('Please enter your second number: ');
console.log('Your second number is ' + num2);

var operation = readlineSync.question('Please enter the operation to perform: add, sub, mult, div ');
console.log('Your operation is ' + operation);


if (operation="add") {
    function add() {
    console.log("The result is: " + (num1+num2));
    }
    console.log(add());
}    
else if (operation="sub") {
    function sub(num1,num2) {
        console.log("The result is: " + (num1-num2));
    }
    console.log(sub());
}
else if (operation="mult") {
    function mult(num1,num2) {
    console.log("The result is: " + (num1*num2));
    }
    console.log(mult());
}
else if (operation="div") {
    function div(num1,num2) {
        console.log("The result is: " + (num1/num2));
    }
    console.log(div());
}   
else {
    console.log("Sorry that is an incorrect operation. Try again.");
}