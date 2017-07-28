// console.log("Hello from JavaScript in another file!");

console.log(document);
console.log(typeof document);
// this shows us that document is actually an "object"

document.getElementById('example').innerHTML = "This text has been replaced with JS!";


//I NEVER KNEW THI SBEFORE!!
// Variables reserve special identifiers that point to values. 
// JavaScript does not recognize variables that start
// with anything but characters a-z, the ‘$’, or the ‘_’.


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



// Review while loop versus do while loop:

// while loop:
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}


// do while loop:  this always executes AT LEAST ONCE NO MATTER THE CONDITION!
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);

//to show that it only checks the condition after:
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 0);

//or this which does nothing
let i = 0;
while (i < 0) {
  console.log(i);
  i++;
}
