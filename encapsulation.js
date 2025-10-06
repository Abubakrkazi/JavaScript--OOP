function createCounting() {
  let count = 0;

  return {
    increment: function() {
      count++;
    },
    decrement: function() {  // fixed typo: "funtion" → "function"
      count--;
    },
    getCount: function() {
      return count;
    }
  };
}

const counterObj = createCounting();

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
