class Counter {
  #count; // private field

  constructor() {
    this.#count = 0; // initialize count
  }

  increment() {
    this.#count++;
  }

  decrement() {
    this.#count--;
  }

  getCount() {
    return this.#count;
  }
}

// Usage
const counterObj = new Counter();

counterObj.increment();
counterObj.increment();
counterObj.increment();
counterObj.increment();
counterObj.increment();
counterObj.decrement();
counterObj.decrement();
counterObj.decrement();
counterObj.decrement();

console.log(counterObj.getCount()); // Output: 1
