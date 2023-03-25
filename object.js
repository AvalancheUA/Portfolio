function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
}

const user = {
    name: "name",
    age: "age",
    sayHello: function(){
        console.log('Привіт, я ' + this.name + ', мені ' + this.age + ' років');  
    }  
}
  user.sayHello();

let calculator = {
    ask: function() {
        this.num1 = Number(prompt("Введіть перше число:"));
        this.num2 = Number(prompt("Введіть друге число:"));},

    sum: function() {
      return this.num1 + this.num2;
    },
    mul: function() {
      return this.num1 * this.num2;
    }
  }
calculator.ask();
alert('Сума:' + calculator.sum());
alert('Добуток:' + calculator.mul());