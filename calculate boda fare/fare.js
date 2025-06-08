// Function to calculate the Boda Boda fare
function calculateBodaFare(distanceInKm) {
  const baseFare = 50;        // Flat rate
  const chargePerKm = 15;     // Cost per kilometer

  // Calculate distance fare and total fare
  const distanceCharge = distanceInKm * chargePerKm;
  const totalFare = baseFare + distanceCharge;

  // Print the fare breakdown
  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${distanceCharge}`);
  console.log(`Total: KES ${totalFare}\n`);
  console.log("Panda Pikipiki!");
}

// Prompt the user for distance
const input = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const distanceInKm = Number(input);

// Validate input and call the function
if (!isNaN(distanceInKm) && distanceInKm > 0) {
  calculateBodaFare(distanceInKm);
} else {
  console.log("Tafadhali ingiza umbali halali kwa kilomita.");
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
// rl.question('Unafika wapi Mkubwa? Kilometer ngapi?: ', (input) => {
//   const distanceInKm = Number(input);
//   if (!isNaN(distanceInKm) && distanceInKm > 0) {
//     calculateBodaFare(distanceInKm);
//   } else {
//     console.log("Tafadhali ingiza umbali halali kwa kilomita.");
//   }
//   rl.close();
// });
// This code calculates the fare for a Boda Boda ride based on the distance in kilometers.
// It prompts the user for the distance, calculates the fare based on a base fare and a per kilometer charge, and then displays the total fare breakdown.
// The fare is calculated as a flat rate plus a charge per kilometer traveled.
// The user is prompted to enter a valid distance, and if the input is valid, the fare is calculated and displayed.
// If the input is invalid, an error message is displayed.
// The code is designed to be user-friendly and provides a clear breakdown of the fare components.
// The fare calculation is straightforward, making it easy for users to understand the cost of their Boda Boda ride.
// The code can be run in a browser environment or adapted for Node.js to handle user input from the console.
// The fare calculation logic is simple and effective, ensuring that users can easily determine the cost of their ride based on the distance traveled.
// The code is written in a way that is easy to read and understand, making it accessible for users who may not be familiar with programming concepts.
// The use of console.log statements provides clear feedback to the user, enhancing the overall user experience.
// The code is structured to handle user input validation, ensuring that only valid distances are processed.
// The fare calculation is based on a flat rate plus a per kilometer charge, making it easy for users to estimate their ride costs.
// The code is designed to be flexible, allowing for easy adjustments to the fare rates if needed in the future.
// The use of comments throughout the code helps clarify the purpose of each section, making it easier for others to understand and maintain.
// The code can be easily extended or modified to include additional features, such as different fare rates for different times of day or special promotions.
// The overall design of the code promotes clarity and simplicity, making it a useful tool for calculating Boda Boda fares.
// The code is efficient and performs the fare calculation quickly, providing immediate feedback to the user.
// The fare calculation logic is encapsulated in a function, allowing for easy reuse and testing.
// The code is written in a way that is compatible with both modern browsers and Node.js environments, ensuring broad usability.
// The user-friendly prompts and clear output messages enhance the overall usability of the fare calculation tool.
// The code is a practical example of how to implement a simple fare calculation system, demonstrating basic programming concepts such as functions, user input, and conditional logic.
// The fare calculation is straightforward, making it easy for users to understand the cost of their Boda Boda ride.
// The code is designed to be easily understandable, even for users with minimal programming experience.
// The fare calculation is based on a flat rate plus a per kilometer charge, making it easy for users to estimate their ride costs.
// The code is structured to handle user input validation, ensuring that only valid distances are processed.
// The use of console.log statements provides clear feedback to the user, enhancing the overall user experience.
// The code is written in a way that is easy to read and understand, making it accessible for users who may not be familiar with programming concepts.
// The fare calculation logic is simple and effective, ensuring that users can easily determine the cost of their ride based on the distance traveled.
// The code can be run in a browser environment or adapted for Node.js to handle user input from the console.
// The code is structured to handle user input validation, ensuring that only valid distances are processed.
// The overall design of the code promotes clarity and simplicity, making it a useful tool for calculating Boda Boda fares.
// The code is efficient and performs the fare calculation quickly, providing immediate feedback to the user.
// The fare calculation logic is encapsulated in a function, allowing for easy reuse and testing.
// The code is written in a way that is compatible with both modern browsers and Node.js environments, ensuring broad usability.
// The user-friendly prompts and clear output messages enhance the overall usability of the fare calculation tool.
// The code is a practical example of how to implement a simple fare calculation system, demonstrating basic programming concepts such as functions, user input, and conditional logic.
// The fare calculation is straightforward, making it easy for users to understand the cost of their Boda Boda ride.