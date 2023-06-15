// When you have a specific type of object that you need to 
// duplicate like our player or inventory items, a better way to 
// create them is using an object constructor, 
// which is a function that looks like this:

function Player(name, marker){
    this.name = name
    this.marker = marker
    this.sayName = () => console.log(name)
    this.sayMarker = function(){
        console.log(marker);
    }
}

const player1 = new Player('Dave', 'O');
const player2 = new Player('Steve', 'X')
console.log(player1.name, player1.marker);
player1.sayName();
player2.sayName();
player1.sayMarker();
player2.sayMarker();


// Exercise
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    switch(read){
        case true:
            this.read = 'has been read';
            break;
        case false:
            this.read = 'not read yet';
            break;
    }
    
    this.info = ()=>{
        message = `${title} by ${author}, ${pages} pages, ${this.read}`;
        return message;
    }

}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, false)
console.log(theHobbit.info())


function Student(name,grade){
    this.name = name;
    this.grade = grade;
}

Student.prototype.sayName = function(){
    console.log(this.name);
}

function goToProm(){
    console.log("Eh.. go to prom");
}

Student.prototype.goToProm = goToProm;

function Teacher(){

}

Teacher.prototype.sayName = function(){
    console.log(this.name);
}

function Principal(name){
    this.name = name;
    this.level = 1;
}

Principal.prototype = Object.create(Teacher.prototype)

function VicePrincipal(name){
    this.name = name
    this.level = 2;
}

VicePrincipal.prototype = Object.create(Teacher.prototype)
// or VicePrincipal.prototype = new Teacher ();

const principal = new Principal('Carol Christ');
const vp = new VicePrincipal('Guy Fawkes')

principal.sayName()
vp.sayName()
console.log(vp.constructor)


//Proto

let animal = {
    eats:true,
};

let rabbit ={
    jumps:true,
}

rabbit.__proto__ = animal;

msg = `Rabbits ${rabbit.jumps} as well as ${rabbit.eats}`;
console.log(msg)

let creature = {
  eats: true,
  walk() {
    alert("Animal walk");
  }
};

let bunny = {
  jumps: true,
  __proto__: creature
};

// walk is taken from the prototype
bunny.walk(); // Animal walk

let animal = {
  eats: true,
  walk() {
    alert("Animal walk");
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

let longEar = {
  earLength: 10,
  __proto__: rabbit
};

// walk is taken from the prototype chain
longEar.walk(); // Animal walk
alert(longEar.jumps); // true (from rabbit)


let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

let admin = {
  __proto__: user,
  isAdmin: true
};

alert(admin.fullName); // John Smith (*)

// setter triggers!
admin.fullName = "Alice Cooper"; // (**)

alert(admin.fullName); // Alice Cooper, state of admin modified
alert(user.fullName); // John Smith, state of user protected

// animal has methods
let animal = {
  walk() {
    if (!this.isSleeping) {
      alert(`I walk`);
    }
  },
  sleep() {
    this.isSleeping = true;
  }
};

let rabbit = {
  name: "White Rabbit",
  __proto__: animal
};

// modifies rabbit.isSleeping
rabbit.sleep();

alert(rabbit.isSleeping); // true
alert(animal.isSleeping); // undefined (no such property in the prototype)


let animal = {
  eats: true
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

// Object.keys only returns own keys
alert(Object.keys(rabbit)); // jumps

// for..in loops over both own and inherited keys
for(let prop in rabbit) alert(prop); // jumps, then eats

let pet = {
  firstName : "Looney",
  lastName: 'Toons'
}

set giveName(value){
  [this.firstName, this.lastName] = value.split(' ');
}

get giveName(){
  return `${this.firstName} ${this.lastName}`;
}

let pig ={
  __proto__ : pet,
  isCartoon : yes
}

alert(pig.giveName);
pig.giveName = "Porky Pig";
alert(pig.giveName);
alert(pet.giveName);

function Universe(){

}

Universe.prototype.sayName = function(){
  console.log(this.name);
}

function Galaxy(name, size){
  this.name = name;
  this.place = 'Universe'
}

Galaxy.prototype.saySize = function(){
  console.log(this.size)
}

Galaxy.prototype = Object.create(Universe.prototype)

const milkyway = new Galaxy("milkyway", "gigantic");
milkyway.sayName(); //logs 'milkyway'
milkyway.saySize(); //logs 'gigantic'
milkyway.place; //'Universe'