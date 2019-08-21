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

//while loop that counts down from ten:

let numberFromTen = 10;
while(numberFromTen >= 0){
    console.log(`The number is ${numberFromTen}`)
    numberFromTen--;
}

//for loops---for loops bundles iterator initialization (always i), then the condition (after each iteration it will check that condition again and based on true or false we'll see a different result), and the the progress statement---an incrementer
//the benefit is that it's self-contained--so i wont hang around after the loop is complete. No variable hanging around. 
for(let i = 0; i < 11; i ++){
    console.log(`i is ${i}`);
}

//if we were to change the incrementer to i --, we would create an infinite loop


//for loop that counts from 99 to 999:

for(let i = 99; i < 1000; i ++){
    console.log(`i is ${i}`)
}

//for loop that counts from 99 to 999 by twos:

for(let i = 99; i < 1000; i +=2){
    console.log(`i is ${i}`)
}

//for loop that counts down from 99 to 999 by twos:

for(let i = 1000; i > 98; i -= 2){
    console.log(`i is ${i}`)
}

//When do I use a while loop and when do I use a for?

//For loops are the choice when you know exactly how long the code should run
//While loops are great when you don't know how long it's going to take or when you are done

//Example: We want this diceroll to end up bigger than .75

// let diceRoll = 0;
// while(diceRoll < .75){
//  //we will not console log, instead we will assign diceRoll a method that will give a random number between 0 and .999999999. We DON'T KNOW how long this is going to take---what if the first 10,000 results of math.random are all under .75?
//  //so we have to use a while loop here because we know that when we're done (when we have a roll that we want to keep)
//  diceRoll = Math.random();
// }
// //be careful, the above loop could run forever!



//You can combine for loops and if checks as well:
//if we only want to count the odd numbers inside of this loop, we can put an if-check inside
for(let i = 0; i < 11; i ++){
 //when I divide i by two (use modulus), if the remainder is one then console.log that number 
        if(i % 2 == 1){
        console.log(`i is ${i}`);
    }
   
}

//A cleaner version would cut out the if-check and use i += 2
//you just start i at 1 and have it go up by 2. It will cut the amount of time you run this code in half.

for(let i = 1; i < 11; i +=2){
           console.log(`i is ${i}`);
 }
      
//Code Challenge: FizzBuzz

//loop up to 30. For each number if the number is divisible by 3, log "fizz"
//if the number is divisible by 5, log "buzz"
//if the number is divisible by BOTH, log "fizzbuzz"
//otherwise, log the number
//each number should only log one message


for(let i = 0; i < 31; i ++){
    if(i % 3 === 0){
        console.log(i + " fizz")
    if (i % 5 === 0){
        console.log(i + "buzz")
        };
    if(i % 15 === 0){
        console.log( i + "fizzbuzz")}else{
            console.log(i)
        }
    }
}
     //we need an else if because we only want one thing to happen 
    // so far its logging both the number and the quote


for(let i = 0; i < 31; i ++){
    if(i % 15 === 0){
        console.log("fizzbuzz")
    }else if (i % 3 === 0){
        console.log("fizz")
    }else if(i % 5 === 0){
        console.log("buzz")
        }else{
            console.log(i)
        }
    }

    
    //you can also do it this way (modern js shortcut)

    for(let i = 0; i < 31; i ++)
        if(i % 15 === 0) console.log("fizzbuzz")
        else if (i % 3 === 0) console.log("fizz")
        else if(i % 5 === 0)console.log("buzz")
        else{console.log(i)
            }
    //(as long as the code block you are trying to execute is one tiny line you can get away with it)      
    