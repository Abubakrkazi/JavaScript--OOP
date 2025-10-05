class Calculator {
    num1=10;
    num2=30;
  constructor(num1, num2) { // constructor with parameters
    this.num1 = num1;
    this.num2 = num2;
  }

  add() {
    return this.num1 + this.num2; // method to add the numbers
  }

  subtract() {
    return this.num1 - this.num2; // optional: subtract method
  }
}

// Create a new instance and pass arguments
const calc = new Calculator(10, 5);

console.log(calc.add());      // Output: 15
console.log(calc.subtract()); // Output: 5
