class Father {
  num1 = 23;
  num2 = 59;

  addNumber() {
    let sum = this.num1 + this.num2;
    console.log(`Father sum is: ${sum}`);
  }
}

class Son extends Father {
  num1 = 24;
  num2 = 50;

  addNumber() {
    let sum = this.num1 + this.num2;
    console.log(`Son sum is: ${sum}`);
  }
}

// ✅ object must be outside the class
let ObjSon = new Son();
ObjSon.addNumber();
