// arrays hold data of some kind

// const john ="John";
// const paul = "Paul";
// const ringo = "Ringo";
// const george = "George";

//They're better together as a list

const beatles = ["John", "Paul", "Ringo","George"]

//starting off with an empty array is more common

const beatlesGroup = [];

//and we add to the array via methods

beatlesGroup.push("John");
beatlesGroup.push("Pete Best");
console.log(beatlesGroup);

beatlesGroup.pop()
console.log(beatlesGroup)

//if you want to take out a specific index, you'll have to splice it 

beatlesGroup.splice(1)
// so (1,1) means you're getting rid of the thing at index one, and only that one thing 
beatlesGroup.splice(1, 1)
console.log(beatlesGroup)

const flowerGarden = [];

flowerGarden.push("roses")
console.log(flowerGarden)

flowerGarden.push("daffodils")
console.log(flowerGarden)

flowerGarden.push("daisies")
console.log(flowerGarden)

flowerGarden.push("hydrangeas")
console.log(flowerGarden)

flowerGarden.splice(2,1)
console.log(flowerGarden)

flowerGarden.pop()
console.log(flowerGarden)

//Use the index to access a specific element
console.log(flowerGarden[0]);
console.log(flowerGarden[1]);
console.log(flowerGarden[2]);

//but how do you know when you've gone too far?
//and by the way we are repeating ourselves

//time to use a for loop

for(let i = 0; i < flowerGarden.length; i ++){
    //use the index (i) to access each element in the array
    console.log(`i is currently ${i}`)
    console.log(`Here are the most beautiful ${flowerGarden[i]} I've ever seen`)
}
//that is how you loop over an array to get every single element

const colors = ["red", "orange", "yellow", "green", "blue","indigo", "violet"]
//console.log each one to say "The 1st color of the rainbow is red"
for(i = 0; i < colors.length; i++)
console.log(`The ${i} color of the rainbow is ${colors[i]}`)

//Fun(?) with functions

function sayHello(){
    console.log("Hello!")
    //nothing shows in the console...why?
}
//you have to CALL the function 
sayHello();
//now you'll see "Hello!" in the console!

//You'll also see functions written this way:
//(using arrow function syntax)
const sayHi = () => {
    console.log("hi!")
}
sayHi();

//the functions above aren't very useful. We need to put something in, known as inputs or parameters...
//once you put parameters in, its like an input/output machine, you can use them anywhere inside the function 
//you dont have to define the variable before you start using it as a parameter, the parameter actually gets defined once the function is called
//a function should do one thing and do it well
function sayHello(greeting, name){
    console.log(`${greeting}, ${name}`)
}
sayHello("Greetings","Yashira");

// const sayHi = (name) => {
//     console.log("hi!")
// }
// sayHi();

//write a subtraction function that takes in two numbers as parameters and subtract the first parameter from the second

function subtract(number1, number2){
    // console.log(`${number1}, - ,${number2}`)
    console.log(number1 - number2)
}

subtract(5, 2);

//How do we store the results of our functions?
//Well if you console.log, results will show in the console, but nothing will COME OUT of the function. 
//If you replace a console.log with return, you'll be able to have contents COME OUT of the function and this is how value is created
//Returns also means the end of the function. Return is the final destination. 


//Modify your subtraction function to return the results and place them inside a variable: 

function subtractReturn(number1, number2){
   const result = number1 - number2
//    console.log(number1-number2);
    return result;
}

//store the result in the variable and log that variable
const subtractNumbers = subtractReturn(5,2);
console.log(subtractNumbers);



//Two-Dimensional Arrays
//what if the first thing in the array is an array?
//Lets access the first array out of another array?

const teas = [
                ["black", "green", "oolong", "rooibos"],
            ["earl grey", "chai", "london fog","emperors cloud"]
];
///When you have nested data structures, like above, the strategy is to go one level at a time

console.log(teas[0][2]);
console.log(teas[1][3]);

