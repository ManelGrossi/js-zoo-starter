//starter code
 
var animalPopulation = 0 
function run() {
   // sleep("Tigger");
   // eat("Tigger", "meat");
   // eat("Tigger", "bacon");
 var tigger = new Tiger("Tigger");
  //tigger.eat("meat");

  var pooh = new Bear("Pooh");
  //pooh.eat("fish");
 // pooh.eat("meat");
  var rarity = new Unicorn("Rarity");
  //rarity.eat("marshmallows");
  //rarity.sleep();
  var gemma = new Giraffe("Gemma");
  //gemma.eat("meat");
  //gemma.eat("leaves");
  //gemma.sleep();
  var stinger = new Bee("stinger");
  //stinger.eat("ice cream");
  //stinger.eat("pollen");
  //stinger.sleep(); 
  let animals = [tigger,pooh, stinger, gemma, rarity]

  var zoeBot = new Zookeeper ("zoeBot");
    zoeBot.feedAnimals(animals,"fish");

    Animal.getPopulation()
   Tiger.getPopulation()
  

  }
  
  /*function sleep(name) {
    console.log(name + " sleeps for 8 hours")
  }
  function eat(name, food){
 
    console.log(name + " eats " + food)
    if(food == favoriteFood){
      console.log("YUM!!! " + name + " wants " + "more " + food)
    } else {
      sleep(name)
    }
  
  
  }*/

/*
  class Tiger {

    constructor(name) {
        this.name = name
        this.favoriteFood = "meat"
    }
    sleep() {
      console.log(this.name + " sleeps for 8 hours")
    }
    eat(food) {
      console.log(this.name + " eats " + food);
      if(food == this.favoriteFood){
        console.log("YUM!!! " + this.name + " wants " + "more " + food);
      } else {
        this.sleep();
      }
    }
}
  class Bear{
    constructor (name){
      this.name = name
      this.favoriteFood = "fish"
    }
    sleep(){
      console.log(this.name + " hibernates for 4 months");
    }
    eat(food){
      console.log(this.name + " eats " + food);
      if(food == this.favoriteFood){
        console.log("YUM!!! " + this.name + " wants " + "more " + food);
      } else {
        this.sleep();
      }
    }
    }*/


class Animal {
    
  constructor(name,favoriteFood) {
       this.name = name
       this.favoriteFood = favoriteFood
       animalPopulation++;
  }

  sleep() {
    console.log(this.name + " sleeps for 8 hours")

  }

  eat(food) {
    console.log(this.name + " eats " + food);
    if(food == this.favoriteFood){
      console.log("YUM!!! " + this.name + " wants " + "more " + food);
    } else {
      this.sleep();
    }
  }
  static getPopulation() {
    return animalPopulation;
  }
  
}

class Tiger extends Animal{
constructor(name){
  super(name,"meat")
}
}
class Bear extends Animal{
  constructor(name){
    super(name, "fish")
  }

sleep(){
  console.log(this.name + " hibernates for 4 months");
}
}
class Unicorn extends Animal{
  constructor(name){
    super(name,"marshmallows")
  }
  sleep(){
    console.log(this.name + " sleeps in the clouds");
}
}
class Giraffe extends Animal{
  constructor(name){
    super(name, "leaves")
  }
  eat(food){
    
    if(food != "leaves"){
    console.log("YUCK!!" + this.name + " will not eat " + food)
    } else {
      super.eat('leaves')
    }
}
}
class Bee extends Animal{
  constructor(name){
    super(name, "pollen")
  }
  eat(food){
    
    if(food != "pollen"){
    console.log("YUCK!!" + this.name + " will not eat " + food)
    }else{
      super.eat('pollen')
    }
  
    }
    sleep(){
      console.log(this.name + " never sleeps")
    }
  }
  class Zookeeper{
    constructor(name){
      this.name = name 
    }
 feedAnimals(animals, food){
    
  this.food = food
    //write a for loop that loos over animals
    console.log(this.name + " is feeding " + this.food + " to " + animals.length + " out of " + animalPopulation + " animals");
    for(let i = 0; i < animals.length; i++){
      
      animals[i].eat(food);
    }
      
    
      
    
  }
}
  


run();