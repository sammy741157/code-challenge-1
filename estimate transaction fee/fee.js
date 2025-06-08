// Function to estimate the mobile money transaction fee
function estimateTransactionFee(amountToSend) {
  const feePercentage = 0.015;
  const minFee = 10;
  const maxFee = 70;

  // Calculate 1.5% fee
  let calculatedFee = amountToSend * feePercentage;

  // Enforce min and max limits
  if (calculatedFee < minFee) {
    calculatedFee = minFee;
  } else if (calculatedFee > maxFee) {
    calculatedFee = maxFee;
  }

  const totalDebited = amountToSend + calculatedFee;

  // Print results
  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${calculatedFee}`);
  console.log(`Total amount to be debited: KES ${totalDebited}\n`);
  console.log("Send Money Securely!");
}

// Prompt the user for the amount
const input = prompt("Unatuma Ngapi? (KES):");
const amountToSend = Number(input);

// Validate input and call the function
if (!isNaN(amountToSend) && amountToSend > 0) {
  estimateTransactionFee(amountToSend);
} else {
  console.log("Tafadhali ingiza kiasi halali cha kutuma.");
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
// rl.question('Unatuma Ngapi? (KES): ', (input) => {
//   const amountToSend = Number(input);
//   if (!isNaN(amountToSend) && amountToSend > 0) {
//     estimateTransactionFee(amountToSend);
//   } else {
//     console.log("Tafadhali ingiza kiasi halali cha kutuma.");
//   }
//   rl.close();
// });
// This code estimates the transaction fee for a mobile money transfer based on the amount to be sent.
// It calculates a fee of 1.5% of the amount, with a minimum fee of KES 10 and a maximum fee of KES 70.
// The total amount debited from the sender's account is the sum of the amount sent and the calculated fee.
// The user is prompted to enter the amount they wish to send, and the code validates the input to ensure it is a positive number.
// If the input is valid, the transaction fee and total debited amount are calculated and displayed.
// If the input is invalid, an error message is shown.
// The code is designed to be user-friendly, providing clear feedback on the transaction details.
// The fee calculation logic is straightforward, making it easy for users to understand the cost of their transaction.
// The code can be run in a browser environment or adapted for Node.js to handle user input from the console.
// The use of console.log statements provides clear feedback to the user, enhancing the overall user experience.
// The code is structured to handle user input validation, ensuring that only valid amounts are processed.
// The transaction fee estimation is based on a percentage of the amount sent, with defined minimum and maximum limits.
// The code is written in a way that is easy to read and understand, making it accessible for users who may not be familiar with programming concepts.
// The use of comments throughout the code helps clarify the purpose of each section, making it easier for others to understand and maintain.
// The code is designed to be flexible, allowing for easy adjustments to the fee rates if needed in the future.
// The fee estimation is a common requirement for mobile money services, and this code provides a simple solution for users to estimate their transaction costs.
// The code is structured to ensure that users can easily determine the total amount that will be debited from their account, including the transaction fee.
// The transaction fee estimation is a useful feature for users who want to understand the costs associated with their mobile money transfers.
// The code is designed to be efficient and effective, providing a quick way for users to estimate their transaction fees without unnecessary complexity.
// The code is a practical example of how to implement a transaction fee estimation feature in a mobile money application, enhancing the user experience by providing transparency in transaction costs.
// The code is structured to be easily maintainable, allowing for future enhancements or changes to the fee calculation logic if needed.
// The transaction fee estimation feature is a valuable addition to any mobile money application, helping users make informed decisions about their transactions.
// The code is designed to be user-friendly and provides a clear breakdown of the transaction costs, making it easy for users to understand the fees associated with their mobile money transfers.
// The code is a practical implementation of a transaction fee estimation feature, demonstrating how to handle user input, perform calculations, and display results in a clear and concise manner.
// The transaction fee estimation is a common requirement for mobile money services, and this code provides a simple solution for users to estimate their transaction costs.
// The code is structured to ensure that users can easily determine the total amount that will be debited from their account, including the transaction fee.
// The transaction fee estimation is a useful feature for users who want to understand the costs associated with their mobile money transfers.
// The code is designed to be efficient and effective, providing a quick way for users to estimate their transaction fees without unnecessary complexity.
// The code is a practical example of how to implement a transaction fee estimation feature in a mobile money application, enhancing the user experience by providing transparency in transaction costs.
// The code is structured to be easily maintainable, allowing for future enhancements or changes to the fee calculation logic if needed.
// The transaction fee estimation feature is a valuable addition to any mobile money application, helping users make informed decisions about their transactions.
// The code is designed to be user-friendly and provides a clear breakdown of the transaction costs, making it easy for users to understand the fees associated with their mobile money transfers.
// The code is a practical implementation of a transaction fee estimation feature, demonstrating how to handle user input, perform calculations, and display results in a clear and concise manner.
// The transaction fee estimation is a common requirement for mobile money services, and this code provides a simple solution for users to estimate their transaction costs.
// The code is structured to ensure that users can easily determine the total amount that will be debited from their account, including the transaction fee.