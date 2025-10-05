function Person() {
  this.first_name = 'Kazi';
  this.last_name = 'Abir';
  this.age = 34;
  this.city = 'Dhaka';

  this.getName = () => {
    // এখানে 'this' ব্যবহার করতে হবে, 'person' না
    return `My name is ${this.first_name} ${this.last_name}`;
  };
}

// ✅ 'new' keyword ব্যবহার করো
let personInstance = new Person();

console.log(personInstance.getName()); // My name is Kazi Abir
