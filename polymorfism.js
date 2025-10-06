// Parent Class
class Father {
  constructor(fname, num1, num2) {
    this.fname = fname;   // Father's name
    this.num1 = num1;     // First number
    this.num2 = num2;     // Second number
  }

  // Method to add numbers
  addNumber() {
    let sum = this.num1 + this.num2;
    console.log(`${this.fname} sum: ${sum}`);
  }
}

// Child Class
class Son extends Father {
  constructor(fname, num1, num2, sname, num3 = 0) {
    super(fname, num1, num2); // Call Father constructor
    this.sname = sname;       // Son's name
    this.num3 = num3;         // Optional extra number
  }

  // Overriding method to do addition for Son
  addNumber() {
    // Using super.addNumber() to also call Father's addition
    super.addNumber(); 

    // Son's own addition (polymorphic behavior)
    let sum = this.num1 + this.num2 + this.num3;
    console.log(`${this.sname} sum: ${sum}`);
  }
}

// Create objects
const dad = new Father("Alauddin Kazi", 23, 59);
const kid = new Son("Alauddin Kazi", 24, 50, "Kazi Abir", 10);

// Call methods
dad.addNumber(); // Father sum only
kid.addNumber(); // Both Father + Son sums (polymorphism + overriding)
