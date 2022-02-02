function assertEqual(expected, actual) {
    process.stdout.write("AssertEquals; Expected: " + typeof(expected) + "(" + expected + "), Actual: " + typeof(actual) + "(" + actual + ")");
    if (expected === actual) {  // :Strict equality:
        console.log("  [True]");
    } else {
        console.log("  [False]");
    }
}

// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key
console.log("\n--------------------------------- Exercise 1. ----------------------------------");
console.log("(Retrieve value from object by key. Log the message.)");

const alienMessage = {
	message: "Hello, earthling! I bring peace."
};

// Log the message 

const value = alienMessage["message"];

assertEqual("Hello, earthling! I bring peace.", value);

// --------------------------------------
// Exercise 2 - Defining an object.
console.log("\n--------------------------------- Exercise 2. ----------------------------------");
console.log("(Defining an object. Create an object that has your name and age. )");
// Create an object that has your name and age. 

const me = {
	name: "Patrick Vincent Højstrøm",
	age: "29"
};

assertEqual("Patrick Vincent Højstrøm", me["name"])
assertEqual("29", me["age"])

// --------------------------------------
// Exercise 3 - Add a property
console.log("\n--------------------------------- Exercise 3. ----------------------------------");
console.log("(Add a property. make a rule called isAllowed and let the value be true.)");

const stackOverflow = {};

// make a rule called isAllowed and let the value be true

stackOverflow["isAllowed"] = true
assertEqual(true, stackOverflow["isAllowed"])

// --------------------------------------
// Exercise 4 - Remove a property
console.log("\n--------------------------------- Exercise 4. ----------------------------------");
console.log("(Remove a property. remove the property 'description' and add a property called 'about' that should say 'Just a tribute'.)");

const thisSong = {
	description: "The best song in the world."
}

// remove the property "description" and add a property called "about" that should say "Just a tribute"

delete thisSong["description"] 
thisSong["about"] = "Just a tribute"

assertEqual("Just a tribute", thisSong["about"])
assertEqual(undefined, thisSong["description"])
