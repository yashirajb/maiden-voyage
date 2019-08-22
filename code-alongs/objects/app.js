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
    "demeanor": "placid"
}
console.log(bigFoot.weight)
console.log(bigFoot.hairColor)
console.log(bigFoot.demeanor)