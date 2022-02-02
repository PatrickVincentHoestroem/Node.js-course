function assertEqual(expected, actual) {
    process.stdout.write("AssertEquals; Expected: " + typeof(expected) + "(" + expected + "), Actual: " + typeof(actual) + "(" + actual + ")");
    if (expected === actual) {  // :Strict equality:
        console.log("  [True]");
    } else {
        console.log("  [False]");
    }
}

// --------------------------------------
// Exercise 1 - Add numbers from string to float
console.log("\n--------------------------------- Exercise 1. ----------------------------------");
console.log("(Add numbers from string to float. add those two numbers and show the result)");

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const numberThree = parseFloat(numberOne) + parseFloat(numberTwo);

/* 1.10 + 2.30 = 3.4 */
assertEqual(3.4, numberThree);


// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals
console.log("\n--------------------------------- Exercise 2. ----------------------------------");
console.log("Add the numbers and the total with 2 decimals.");

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const anotherNumberThree = (parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo) + numberThree).toFixed(2);

/* 1.10 + 2.30 + 3.4 = 6.8 */
assertEqual("6.80", anotherNumberThree);


// --------------------------------------
// Exercise 3 - Decimals and average
console.log("\n--------------------------------- Exercise 3. ----------------------------------");
console.log("Decimals and average. Show in the console the avg. with 5 decimals.");

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const avg = ((one + two + three) / 3).toFixed(5);

/* (10 + 45 + 98) / 3 = 51 */
assertEqual("51.00000", avg);

// --------------------------------------
// Exercise 4 - Get the character by index
console.log("\n--------------------------------- Exercise 4. ----------------------------------");
console.log("Get the character by index. Get me the character 'c'.");

const letters = "abc";
// Get me the character "c"

const letter = letters.charAt(2);
// or array operation: const letter = letters[2]

assertEqual("c", letter);

// --------------------------------------
// Exercise 5 - Replace
console.log("\n--------------------------------- Exercise 5. ----------------------------------");
console.log("(Replace. Capitalize the J in Javascript)");

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const capitalized = fact.replace("javascript", "Javascript");

assertEqual("You are learning Javascript!", capitalized);
