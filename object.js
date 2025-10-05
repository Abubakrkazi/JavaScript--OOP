let person = {
  first_name: "Kazi",
  last_name: "Abir",
  age: 21,
  city: "Dhaka",
  isBangladeshi: true,
  getName: () => {
    return `My full name is ${person.first_name} ${person.last_name}`;
  }
};

console.log(`Age :${person.age}`);       // 21
console.log(person.getName()); // My full name is Kazi Abir
