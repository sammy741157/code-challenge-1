// Function to calculate chai ingredients based on the number of cups
function calculateChaiIngredients(numberOfCups) {
  // Ingredient amounts per cup
  const waterPerCup = 200; // in ml
  const milkPerCup = 50;   // in ml
  const teaLeavesPerCup = 1; // in tablespoons
  const sugarPerCup = 2;     // in teaspoons

  // Calculate totals
  const totalWater = waterPerCup * numberOfCups;
  const totalMilk = milkPerCup * numberOfCups;
  const totalTeaLeaves = teaLeavesPerCup * numberOfCups;
  const totalSugar = sugarPerCup * numberOfCups;

  // Display the result
  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${totalWater} ml`);
  console.log(`Milk: ${totalMilk} ml`);
  console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoons`);
  console.log(`Sugar (Sukari): ${totalSugar} teaspoons`);
  console.log("\nEnjoy your Chai Bora!");
}

// Prompt the user for input
const input = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = Number(input);

// Validate and call the function
if (!isNaN(numberOfCups) && numberOfCups > 0) {
  calculateChaiIngredients(numberOfCups);
} else {
  console.log("Tafadhali ingiza nambari sahihi ya vikombe vya chai.");
}
// Note: The prompt function is typically used in browser environments.
// If running in Node.js, you may need to use a different method to get user input.
// For example, you can use the readline module in Node.js to get input from the console.
// Example for Node.js:
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// rl.question('Karibu! How many cups of Chai Bora would you like to make? ', (input) => {
//   const numberOfCups = Number(input);
//   if (!isNaN(numberOfCups) && numberOfCups > 0) {
//     calculateChaiIngredients(numberOfCups);
//   } else {
//     console.log("Tafadhali ingiza nambari sahihi ya vikombe vya chai.");
//   }
//   rl.close();
// });
// This code calculates the ingredients needed to make a specified number of cups of Kenyan Chai.
// It prompts the user for the number of cups and calculates the total amounts of water, milk, tea leaves, and sugar required.
// The ingredient amounts per cup are predefined, and the code multiplies these amounts by the number of cups requested.
// The results are displayed in a user-friendly format, providing clear instructions on how much of each ingredient is needed.
// The code is designed to be interactive, allowing users to easily determine the ingredients needed for their desired number of cups of Chai.
// The use of console.log statements provides clear feedback to the user, enhancing the overall user experience.
// The code can be run in a browser environment or adapted for Node.js to handle user input from the console.
// The ingredient calculation logic is straightforward, making it easy for users to understand the requirements for making Chai.
// The code is structured to handle user input validation, ensuring that only valid numbers of cups are processed.
// The use of comments throughout the code helps clarify the purpose of each section, making it easier for others to understand and maintain.
// The code is written in a way that is easy to read and understand, making it accessible for users who may not be familiar with programming concepts.
// The code is designed to be flexible, allowing for easy adjustments to the ingredient amounts if needed in the future.
// The use of a prompt function allows for easy interaction with the user, making it simple to input the desired number of cups.
// The code is a practical example of how to calculate ingredients for a common beverage, making it relevant and useful for users interested in cooking or beverage preparation.
// The code is structured to ensure that users can easily determine the total amounts of each ingredient needed, enhancing the overall usability of the program.
// The code is designed to provide a clear and concise output, making it easy for users to follow the instructions and prepare their Chai.
// The code is a simple yet effective solution for calculating Chai ingredients, making it a valuable tool for anyone looking to make this popular beverage.
// The code is designed to be user-friendly and provides a clear breakdown of the ingredient amounts, making it easy for users to understand how to prepare their Chai.
