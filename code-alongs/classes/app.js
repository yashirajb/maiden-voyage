//Classes

//if we were creating an alien object for a game, we could say: 
const alien = {
    health: 50,
    damage: 10,
    name: "Ruckenblax the Peaceful",
    destroy(){
        console.log(`But I don't like destroying things, I'm ${alien.name}`)
    }

}

alien.destroy()
//Result: But I don't like destroying things, I'm Ruckenblax the peaceful

//What if you're playing a game and there are more enemies and more stuff to do?
//What if after one enemy dies, another one appears? You could do this: 

const alien2 = {
    health: 50,
    damage: 10,
    name: "Sushankz the Peaceful",
    destroy(){
        console.log(`But I don't like destroying things, I'm ${alien2.name}`)
    }

}

alien2.destroy()

const alien3 = {
    health: 50,
    damage: 10,
    name: "Digidorf the Peaceful",
    destroy(){
        console.log(`But I don't like destroying things, I'm ${alien3.name}`)
    }

}

alien3.destroy()

//But the code is already breaking DRY conventions...there must be a better way:

//We are going to create a function that will generate new INSTANCES (new versions) of specific objects for us
//THE BLUEPRINT WE WILL BE USING IS REFERRED TO AS A CLASS...
//With classes you can use the same function over and over again to create new instances (the term for memebers of a class are instances)

class Alien {
    //constructor function using this (refers to Alien)
     constructor(){
         console.log("Creating a new alien")
         this.health = 100;
         this.damage = 50;

     }
}

const Ruggelmorf = new Alien();
const Zendo = new Alien();
//class is set up now we can use it
//new is a keyword, signals a class is going to be used
//invoking the method with the parentheses at the end
//these two variables are now instances of our class
console.log(Ruggelmorf)
//Result: Alien {health: 100, damage: 50} just like what is in the constructor
console.log(Zendo)
//Result: Alien {health: 100, damage: 50} just like what is in the constructor

//Again, the idea behind a class is to provide a blueprint, a pattern for creating alot of 
//objects that all share things in common...so far health and damage are shared

//Now, the real power comes in being able to CUSTOMIZE. So far the constructor doesn't have a parameter passed in 
//so the same exact thing is being created every single time. If we pass in a parameter, we can now assign it to an object being created


class AlienWithParam {
    //constructor function using this (refers to Alien)
     constructor(name){
         console.log("Creating a new alien")
         this.health = 100;
         this.damage = 50;
         //assigned to the object being created
         this.name = name; 

     } 
}

const Duggelmorf = new AlienWithParam("Duggelmorf");
const Kendo = new AlienWithParam("Kendo");
console.log(Duggelmorf)
console.log(Kendo)

//Create a class called person that has a few default properties and at least one parameter

class Person {
  constructor (race, height){
      this.head = 1;
      this.eyes = 2;
      this.ears = 2;
      this.mouth = 1
      this.nose = 1
      this.legs = 2;
      this.arms = 2;
      this.torso = 1;
      this.feet = 2;
      this.hands = 2;
      this.fingers= 10;
      this.toes = 10;
      this.race = race;
      this.height = height;
      
      }
      personalStatement(myThoughts){
        console.log(`I think ${myThoughts} is not welcomed here`)

  }

}

//invoking the constructor to create new instances, for example, the name input is defined when we invoke the class
const rashad = new Person("black", "six feet")
console.log(rashad)
rashad.personalStatement("my perspective on what caused the Great Depression")
const lakshmi = new Person("indian", "five feet")
console.log(lakshmi)
lakshmi.personalStatement("my perspective on global warming")
const genivieve = new Person("white", "four feet")
console.log(genivieve)
genivieve.personalStatement("my perspective on technology overuse")


// So far our class has poperties (props), just like objects do, but there's something else that objects have that haven't yet been given to this class, and that is:
//****** METHODS ********

class AlienWithMethod {
    constructor(name){
        //the constructor is actually a method, just a really special method
        this.health = 100;
        this.damage = 50;
        this.name = name; 
 
    }
    //objects have properties and methods, now we will add a method and refer to the individual object with the this KEYWORD and that's how we can add a method to the class
    //called an "instance method" because it doesn't belong to the overall class, it belongs to the individual things created by the class (the instances)
    //you can add params if you wanted 
    introduce(illness){
        console.log(`Hello, my name is ${this.name} and I ${illness}`)
    }
}

const Muggeldorf = new AlienWithMethod("Muggeldorf");
console.log(Muggeldorf)
//returns: AlienWithMethod { health: 100, damage: 50, name: 'Muggeldorf' } Here we see properties, but there is no METHOD 
const Nintendo = new AlienWithMethod("Nintendo");
console.log(Nintendo)
//returns: AlienWithMethod { health: 100, damage: 50, name: 'Nintendo' } Here we see properties, but there is no METHOD 

Muggeldorf.introduce("am feeling nauseous today");
Nintendo.introduce("think I'm coming down with a cold today");

