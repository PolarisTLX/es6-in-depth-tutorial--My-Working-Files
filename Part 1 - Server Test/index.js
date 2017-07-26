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



let x = 3;

switch(x) {
  case 1:
    console.log("The number is 1")
    break;
  case 2:
    console.log("The number is 2")
    break;
  case 3:
    console.log("The number is 3")
    break;
  default:
    console.log("The number is X")
    break;
}


//NOTE THAT THE BREAKS IS NECESSARY!!! can test by testing for x = 1
