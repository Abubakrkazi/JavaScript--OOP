class Person {
  constructor(name, age) {   // constructor with parameters
    this.name = name;         // set the object's name
    this.age = age;           // set the object's age
  }

  introduce() {
    return `My name is ${this.name} and I am ${this.age} years old.`;
  }
}

// Create a new object
const person1 = new Person("Kazi Abir", 34);
console.log(person1.introduce()); // My name is Kazi Abir and I am 34 years old.
