let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple","banana","orange"];

//Test for equality and inequality with stringd.
console.log("Is apple is equal to apple?");
console.log(apple == "apple");

console.log(" \n Is apple is not equal to apple?");
console.log(apple  != "apple");

// test using the lowercase function
console.log("Is APPLE is equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log(" \n Is APPLE is  not equal to apple after converting to lowercase");
console.log(uppercaseApple.toLowerCase() != "apple");

//Numerical test
//equal to
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);
//not equal to
console.log("\n Is ten is not equal to twenty?");
console.log(ten != twenty);

//greater than
console.log(" \n Is ten is greater than zero?");
console.log(ten > 0);

//less than
console.log("/n twenty is less than ten");
console.log(twenty < 10);

//greater than or equal to
console.log("\n Is ten is greater than or equal to 5?");
console.log(ten >= 5);

//less than or equal to
console.log("\n twenty is less than or equal to 10");
console.log(twenty <= 10);

//Test using "and & "or" operator:
//Using && (and)
console.log("\n twenty is not equal to 10 and  twenty is greater than 10");
console.log( twenty != 10 && twenty > 10);

console.log("\n twenty is not equal to 10 and  twenty is greater than 30");
console.log( twenty != 10 && twenty > 30);

//using || (OR) 
console.log("/n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);

console.log("/n 20 is  greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);

//Test whether an item is include in array
console.log("\n Is orange include in my  fruits array");
console.log(fruits.includes("orange"));

console.log("\n Is orange not include in my  fruits array");
console.log(!fruits.includes("orange"));






































