class Person{
  first_name = 'Kazi';
  last_name = 'Abir';
  age = 34;
  city = 'Dhaka';

  getName = () => {
   
    return `My name is ${this.first_name} ${this.last_name}`;
  };
}
let personInstance = new Person();

console.log(personInstance.getName());
