class Calculator {
  add(a = 0, b = 0, c = 0) {
    return a + b + c;
  }
}

const calc = new Calculator();
console.log(calc.add(5, 10));      // 15
console.log(calc.add(5, 10, 20));  // 35
console.log(calc.add());           // 0
