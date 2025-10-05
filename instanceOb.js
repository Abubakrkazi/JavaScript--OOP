let person =Object();
person.first_name='Kazi';
person.last_name='Abir';
person.age=34;
person.city='Dhaka';

person.getName=()=>{
    return ` My name is ${person.first_name} ${person.last_name}` 
}
console.log( person.getName());