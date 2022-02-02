function assertNotEqual(expected, actual) {
    process.stdout.write("AssertEquals; Expected: " + typeof(expected) + "(" + expected + "), Actual: " + typeof(actual) + "(" + actual + ")");
    if (expected !== actual) {  // :Strict not equality:
        console.log("  [True]");
    } else {
        console.log("  [False]");
    }
}

function assertEqual(expected, actual) {
    process.stdout.write("AssertEquals; Expected: " + typeof(expected) + "(" + expected + "), Actual: " + typeof(actual) + "(" + actual + ")");
    if (expected === actual) {  // :Strict equality:
        console.log("  [True]");
    } else {
        console.log("  [False]");
    }
}

// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning
console.log("\n--------------------------------- Exercise 1. ----------------------------------");
console.log("(Array Positioning, show b in the console )");

const letters = ["a","b","c"];
// show b in the console 

assertEqual("b", letters[1])

// --------------------------------------
// Exercise 2 - Array Positioning
console.log("\n--------------------------------- Exercise 2. ----------------------------------");
console.log("(Array Positioning. What a lonely array. Add at least 3 friend objects to it.)");

const friends = [];

// What a lonely array. Add at least 3 friend objects to it.  

friends[0] = "Larry"
friends[1] = "Bob"
friends[2] = "Harry"

friends.push("Dave", "Bill", "Gabe")

console.log(friends)

// --------------------------------------
// Exercise 3 - Get the index of first occurrence of that value.
console.log("\n--------------------------------- Exercise 3. ----------------------------------");
console.log("(Get the index of first occurrence of that value. You want to programmatically find where the number 1729 is in the array.)");

const significantMathNumbers = [0, 2.718, 3.14159, 1729];

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 

assertEqual(1729, significantMathNumbers.find(element => element == 1729))

// --------------------------------------
// Exercise 4 - Inserting elements
console.log("\n--------------------------------- Exercise 4. ----------------------------------");
console.log("(Inserting elements. You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket)");

const diet = ["tomato", "cucumber", "rocket"];

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket

diet.push("hamburger", "soda", "pizza")
console.log(diet)
console.log("FAILED")


// --------------------------------------
// Exercise 5 - Remove element
console.log("\n--------------------------------- Exercise 5. ----------------------------------");
console.log("(Remove element. Remove the LAST element of the array.)");

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already. 

const array = [3, 1, 4]
const removed = array.pop()

assertEqual(4, removed)
assertEqual(2, array.length)
assertEqual(3, array[0])
assertEqual(1, array[1])
console.log(array)

// --------------------------------------
// Exercise 6 - Copy array
console.log("\n--------------------------------- Exercise 6. ----------------------------------");
console.log("(Copy array. You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend. )");

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.  

const dinnerTray = array.slice()

assertEqual(3, dinnerTray[0])
assertEqual(1, dinnerTray[1])
console.log(dinnerTray)

// --------------------------------------
// Exercise 7 - For loop
console.log("\n--------------------------------- Exercise 7. ----------------------------------");
console.log("(For loop. log every second char in the array starting from b.)");

const lettersExpanded = ["a","b","c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b

const lettersShort = [];
for (let i = 0; i < lettersExpanded.length; i++) {
    if (i % 2 == 0) {
        lettersShort.push(lettersExpanded[i])
    };
}

assertEqual("a", lettersShort[0])
assertEqual("c", lettersShort[0])
assertEqual("e", lettersShort[0])
assertEqual("g", lettersShort[0])
console.log(lettersShort)

// --------------------------------------
// Exercise 8 - For loop and if statement
console.log("\n--------------------------------- Exercise 8. ----------------------------------");
console.log("(For loop and if statement. log the element if the number is above 6 or below 0. else push them to the array discardedNumbers.)");

const numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];

const discardedNumbers = [];

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 6 || numbers[i] < 0) {
        discardedNumbers.push(numbers[i])
    }
}

assertEqual(7, discardedNumbers[0])
assertEqual(11, discardedNumbers[1])
assertEqual(12, discardedNumbers[2])
assertEqual(-20, discardedNumbers[3])

console.log(discardedNumbers)

// --------------------------------------


