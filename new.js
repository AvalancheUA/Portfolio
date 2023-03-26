function Accumulator(initialValue) {
    this.value = initialValue;
    this.increment = function() {
      this.value++;
    };
    this.decrement = function() {
      this.value--;
    };
}
function CancelableAccumulator(initialValue) {
    Accumulator.call(this, initialValue); 

 const  originalValue = initialValue; 

    this.clear = function() {
    this.value = originalValue;
  };

}

const acc = new Accumulator(1);
console.log(acc.value); // 1
acc.increment();
console.log(acc.value); // 2
acc.decrement();
console.log(acc.value); // 1

const cac = new CancelableAccumulator(10);
console.log(cac.value); // 10
cac.increment();
console.log(cac.value); // 11
cac.clear();
console.log(cac.value); // 10