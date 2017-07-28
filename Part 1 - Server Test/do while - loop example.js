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
