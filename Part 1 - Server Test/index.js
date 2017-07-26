// console.log("Hello from JavaScript in another file!");

console.log(document);
console.log(typeof document);
// this shows us that document is actually an "object"

document.getElementById('example').innerHTML = "This text has been replaced with JS!";




// object example practice:

let dog = {
  name: "Buddy",
  breed: "Golden Retreiver",
  weight: 60,
  bark: function() {
    console.log("Woof!");
  }
};

dog.bark();    //this consoles "Woof!"
