 function Counter() {
  let count = 0; // private variable

  // Public methods
  this.increment = function() {
    count++;
  };

  this.decrement = function() {
    count--;
  };

  this.getCount = function() {
    return count;
  };
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
