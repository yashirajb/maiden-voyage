//Objects

//Unlike arrays, objects allow us to store information without having to remember exactly what spot they are in 
const meArray = ["Yashira", "Baggett", "Goldsboro"]
//to represent real life objects that make sense to all involved. The above array wouldn't really make sense to someone who doesn't know me


const meMakesMoreSenseArray = {
    "key" : "value",
    "firstname": "Yashira",
    "lastname": "Baggett",
    "hometown": "Goldsboro"
}

//How do I get things out?
//Use the name of the object + either dot or bracket notation

console.log(meMakesMoreSenseArray.firstname)
//"Yashira"

//What about nested data?

const meMakesEvenMoreSenseArray = {
    "key" : "value",
    "firstname": "Yashira",
    "lastname": "Baggett",
    "livedTowns": [{"place":"Goldsboro"},{"place":"Japan"},{"place":"San Diego"},{"place":"Riverside"},{"place":"Los Angeles"}],
    "teach": function(reading){
        console.log(`Today we will practice ${reading}`)
    }
}

//What if I wanted to grab Los Angeles from the nested array?

console.log(meMakesEvenMoreSenseArray.livedTowns[4].place)
//Result is Los Angeles

//Objects can store functions, and these functions are called METHODS
//you can INVOKE THE METHOD by using the name of the object and the name of the method and you can pass in anyy parameter you desire 

meMakesEvenMoreSenseArray.teach("how to break syllables correctly")
//Result is Today we will practice how to break syllables correctly

//Note: Key names don't have to be in quotes but may be useful when code gets more complicated

//Create a BigFoot object with shoe size, weight, and current location, as well as height, hair color, and demeanor

const bigFoot = {
    "height": "10 feet",
    "weight": "568 pounds",
    "shoeSize": "15",
    "currentLocation": "undetermined",
    "hairColor": "ashen-blonde",
    "demeanor": "placid",
    "cleanliness": "reeks",
    showerStrategy: function(){
        console.log("I haven't showered in months")
    }
    
}
console.log(bigFoot.weight)
console.log(bigFoot.hairColor)
console.log(bigFoot.demeanor)
bigFoot.showerStrategy();

//Remember you don't have to have quotes around the keys

//Setting Keys and Values other ways---
//the following two ways will work as well, say you have a complete new bigFoot object with no information in there:

bigFoot.shoeSize = 87;
bigFoot["height"] = 10;

//With objects, even after you are done, you can always throw more keys on there
//remember, you reassign or override the value if you later assign another value to the same key


//if we are in an object, we can reference the object itself with....this
//THIS KEYWORD

const bigFootUsingThis = {
    "height": "10 feet",
    "weight": "568 pounds",
    "shoeSize": "15",
    "currentLocation": "undetermined",
    "hairColor": "ashen-blonde",
    "demeanor": "placid",
    "cleanliness": "reeks",
    needShowerStrategy(){
        console.log(`When you ask around, people say he ${this.cleanliness}`)
        //here we are referencing the object itself (this taking the place of bigFootUsingThis)
    }
    
}

bigFootUsingThis.needShowerStrategy();

//Start off with an empty object and add to it using dot or bracket notation
const whatImLike = {}

whatImLike.morning = "alert",
whatImLike.midMorning ="productive",
whatImLike["afternoon"]="useful",
whatImLike["midAfternoon"]="considerate",
whatImLike.lateAfternoon = "reflective",
whatImLike["evening"]="settled",
whatImLike.midevening="quiet",
whatImLike["lateevening"]="restful",
// needToStayAwakeStrategy(){
//     console.log(`I can't stay awake without coffee, I'm already in ${this.lateevening} mode`)
    //throwing an error beause the object doesn't exist inside the brackets yet. if the object doesn't exsit inside the brackets yet,
    //you'l have to:

whatImLike.needToStayAwakeStrategy= function(){
        console.log(`I can't stay awake without coffee, I'm already in ${this.lateevening} mode`)
}

whatImLike.needToStayAwakeStrategy()

//Difference between dot notation and bracket notation

const computer = {};
let monitor = "screen"
//DOT NOTATION takes in names literally as strings
computer.monitor = "64 inch"
//BRACKET NOTATION can use variable names
computer[monitor] = 72;
console.log(computer)
//Returns {monitor: '64 inch', screen: 72}
//it has read monitor as a variable (created a few lines above) instead of a string


