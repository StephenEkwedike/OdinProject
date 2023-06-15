let user = {
    name: "John",
    surname: "Smith"
  };
  
  Object.defineProperty(user, 'fullName', {
    get() {
      return `${this.name} ${this.surname}`;
    },
  
    set(value) {
      [this.name, this.surname] = value.split(" ");
    }
  });
  
  alert(user.fullName); // John Smith
  
  for(let key in user) alert(key); // name, surname

  ////
  
  let user = {
    name: "John",
    surname: "Stacy"
  };

  Object.defineProperty(user, 'fullName',{
    get(){
        return`${this.name} ${this.surname}`
    },
    set(value){
        [this.name,this.surname] = value.split;
    }
  });

  user.fullName = 'Dave Carrey'

  ////

  let user = {
    get name() {
      return this._name;
    },
  
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short, need at least 4 characters");
        return;
      }
      this._name = value;
    }
  };
  
  user.name = "Pete";
  alert(user.name); // Pete
  
  user.name = ""; // Name is too short...



  function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;
  }
  
  let john = new User("John", new Date(1992, 6, 1));
//   Now what to do with the old code that still uses age property?
  
//   We can try to find all such places and fix them, but that takes time and can be hard to do if that code is used by many other people. And besides, age is a nice thing to have in user, right?
  
//   Let’s keep it.
  
//   Adding a getter for age solves the problem:
  
  function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;
  
    // age is calculated from the current date and birthday
    Object.defineProperty(this, "age", {
      get() {
        let todayYear = new Date().getFullYear();
        return todayYear - this.birthday.getFullYear();
      }
    });
  }
  
  let john = new User("John", new Date(1992, 6, 1));
  
  alert( john.birthday ); // birthday is available
  alert( john.age );      // ...as well as the age
  Now the old code works too and we’ve got a nice additional property.