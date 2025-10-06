class Father {
  constructor(fname, age) {
    this.fname = fname;
    this.age = age;
    console.log(`Father constructor: Name = ${this.fname}, Age = ${this.age}`);
  }
}

class Son extends Father {
  constructor(fname, age, sname) {
    super(fname, age); // call Father constructor
    this.sname = sname;
    console.log(`Son constructor: Name = ${this.sname}, Father = ${this.fname}`);
  }
}

const obj = new Son("Alauddin Kazi", 55, "Kazi Abir");
