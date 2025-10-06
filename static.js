class Person{
   static first_name = 'Kazi';
   static last_name = 'Abir';
   static age = 34;
   static city = 'Dhaka';

  static getName = () => {
   
    return `My name is ${this.first_name} ${this.last_name}`;
  };
}

console.log(Person.first_name);
console.log(Person.last_name);
console.log(Person.getName());
