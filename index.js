// Let's play with some ES6+ constructs...

// for demo purposes let's shrink console

const log = message => {
  console.log(message);
};

// fat arrow to define function
const theFunc = () => {
  log("hello world!");
};

// class structure
class TheClass {
  constructor(param1, param2) {
    log("TheClass is being constructed with these params:");
    log(param1);
    log(param2);
  }
  hello() {
    log("hello from The Class");
  }
}

theFunc();

const myClass = new TheClass("parameter number one", "parameter number two");
myClass.hello();
