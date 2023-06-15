const personFactory = (name, age)=>{
    const sayHello = ()=> console.log('hello');
    return {name, age, sayHello};
}

//This is the same as above but just using standard object format
const Person = function(name, age){
    const sayHello = ()=> console.log('hello');
    this.name = name;
    this.age = age;
}

const jeff = personFactory('Jeff', 27);
console.log(jeff.name); //'Jeff'
jeff.sayHello(); // logs 'hello'

const counterCreator=()=>{
    count=0; //initializes a local variable;
    return ()=>{
        console.log(count);
        count++;
    }
}

const counter = counterCreator();
counter(); //0  //note using '()' after counter calls the return value of its facfunc
counter(); //1
counter(); //2

const altCounterfac = ()=>{
  count=0
  const counter =()=>{
    console.log(count)
    count++
  }
  return{counter}
}

const count1 = altCounterfac();
count1.counter() // returns 0
count1.counter() //returns 1

const Player = (name, level) => {
  let health = level * 2;
  const getLevel = () => level;
  const getName  = () => name;
  const die = () => {
    // uh oh
  };
  const damage = x => {
    health -= x;
    if (health <= 0) {
      die();
    }
  };
  const attack = enemy => {
    if (level < enemy.getLevel()) {
      damage(1);
      console.log(`${enemy.getName()} has damaged ${name}`);
    }
    if (level >= enemy.getLevel()) {
      enemy.damage(1);
      console.log(`${name} has damaged ${enemy.getName()}`);
    }
  };
  return {attack, damage, getLevel, getName};
};

const jimmie = Player('jim', 10);
const badGuy = Player('jeff', 5);
jimmie.attack(badGuy);

/* Inheritance with Function Factories */

const Person2 = (name)=>{
    const sayName = () => console.log(name);
    return {sayName};
}

const Nerd = (name)=>{
    //simply create a Person2 using the function you want to pull from it in here to inherit 
    const {sayName} = Person2(name);
    const doSomethingNerdy = ()=> {
        console.log('nerd stuff')
    }

    return {sayName,doSomethingNerdy}
}

const jeff = Nerd('Jeff');

jeff.sayName(); // logs 'Jeff'
jeff.doSomethingNerdy(); // logs 'nerd stuff';

// if we want to use everything from Person2 in Nerd rather than just sayName():
// we use Object.assign(target,...source)
// so this is how we rewrite the Nerd funcfac:

const Nerd = ()=>{
    const prototype = Person2(name) // we use prototype keyword instead of {function}
    const doSomethingNerdy = () => console.log('nerd stuff')
    return Object.assign({}, prototype, {doSomethingNerdy}); //merges prototype, ie Person2 and doSomething() function and returns it how we normally do for funcfacs with {}

}

// Modules, exactly like funcfacs but we wrap it in () and then put () at the end to call it. We do this when we just want to use it once.

const calculator = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return {
    add,
    sub,
    mul,
    div,
  };
})();

calculator.add(3,5); // 8
calculator.sub(6,2); // 4
calculator.mul(14,5534); // 77476

