// Let's play with some ES6+ constructs...

// for demo purposes let's shrink console

const rd = require("./redux");

const log = message => {
  console.log(message);
};

// fat arrow to define function
const theFunc = () => {
  log("hello world!");
};

// TODO: string templates...
// try/catch
// promises
// async
// spread operator

// class structure
class Vegetable {
  constructor(param1, param2) {
    log("TheClass is being constructed with these params:");
    log(param1);
    log(param2);
    this.prop1 = param1;
    this.prop2 = param2;
  }

  hello() {
    log("hello from The Class");
    log("This is the value of property 1: ");
    log(this.prop1);
  }
}

theFunc();

const theVegetable = new Vegetable(
  "parameter number one",
  "parameter number two"
);
theVegetable.hello();

rd.here();
