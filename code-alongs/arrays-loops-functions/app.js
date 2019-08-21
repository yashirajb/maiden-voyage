console.log("Working")
//When considering what you can do with the inspect terminal, you can refer to variables that you create in that console in this file:
//created theConsoleIsCool in the inspect console first and now it's being referenced below:
const theConsoleIsCool = true;
//creating variables of various types
const theBestClass = "Starfleet"
//and use conditionals to check for stuff, and then you can do stuff (console.log)
if(theBestClass === "Starfleet"){
    console.log("they must have a great instructor")
}else{
    console.log("it's their own fault!!")
}

//the concept of a conditional (an if/else statement) falls into the larger bucket of "Control Flow", which essentially asks if we can use the conditional to control the flow of our program. Instead of always flowing top to bottom, we can use these conditionals to enable the program to flow in different directions,
//used to control which lines of code execute---above if the statement is true, it can jump to line 13, if the statement is false, it stops at line 11
//also critical is the use of BRACKETS to define a CODE BLOCK---we will use code blocks in loops alot and we'll use them in conditionals as well
//Code blocks are in brackets and define a specific block of code to execute in certain conditions
//Within loops, essentially you're creating within the code block a block of code that you want to repeat over and over until a certain condition is met

//While Loops
//While loops are alot like if-checks. but the if-check says do this once while the WHILE loop says keep doing the thing until the condition is false, so you have to be really careful with while loops because they can become infinite

//We have a number and we want to count up to 10
//Non-loop version:

let number = 1; 
console.log("The number is " + number);
//add 1 to it
number += 1;
//or number ++ or number = number + 1
console.log("The number is " + number)
//now console.log that over and over
number += 1;
console.log("The number is " + number)
number += 1;
console.log("The number is " + number)
number += 1;
console.log("The number is " + number)
number += 1;
console.log("The number is " + number)
number += 1;
console.log("The number is " + number)
number += 1;
console.log("The number is " + number)

//We are repeating ourselves too muc----not DRY at all
//Instead we can put this operation inside a loop and tell it when to stop

let numberToTen = 1;
while(numberToTen < 11){
    //using string interpolation
    console.log(`The number is ${numberToTen}`);
    //if we ran this right now it would never end because it would execute the code block and go back into the condition again over and over and over again
    //so you must make sure you are doing something inside the code block that will help you reach that condition
    // add number ++ (this is the something that will help us reach the condition)
    //also changed 10 on line 50 to 11---you'll see this way more than number <= 10, the former is the convention
    numberToTen++;
}

//while loop that counts down from ten

let numberFromTen = 10;
while(numberFromTen >= 0){
    console.log(`The number is ${numberFromTen}`)
    numberFromTen--;
}