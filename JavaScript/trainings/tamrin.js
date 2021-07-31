const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


const gcd = (a, b) => {
  let max,
    min,
    r = 1;
  max = a;
  min = b;
  while (r != 0) {
    r = max % min;
    max = min;
    min = r;
  }
  return max;
};

rl.question("Please enter the first number : ", (answer1) => {
  rl.question("Please enter the second number : ", (answer2) => {
    const a = answer1;
    const b = answer2;
    let result = gcd(a, b);
    console.log(`The GCD of above two numbers is ${result}`);
    rl.close();
  });
});
