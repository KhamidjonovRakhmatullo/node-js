const calculate = require("./models/hisob");
const Account = require("./models/account");

/* ==================================================
   CALCULATION MODULE USAGE
   ================================================== */

const natija = calculate.kopaytirish(3, 3);
// console.log("Natija (kopaytirish):", natija);

const natija2 = calculate.bolish(20, 2);
// console.log("Natija (bolish):", natija2);

const natija3 = calculate.qoshish(50, 50);
// console.log("Natija (qoshish):", natija3);

const natija4 = calculate.ayrish(22, 2);
// console.log("Natija (ayrish):", natija4);



/* ==================================================
   ACCOUNT CLASS USAGE
   ================================================== */

// Call static method
// Static methods belong to the class itself,
// not to a specific account instance
Account.tellMeAboutClass();
Account.time();

console.log("==========");

// Create a new account instance
// Parameters:
// 1. Account holder name
// 2. Initial balance
// 3. Unique account ID
const myAccount = new Account("Alan", 4000, "23d32-31dxw1-21-d-13d1-3d1");

// Get account details
myAccount.details();

// Deposit to current balance
myAccount.deposit(6000);

// Withdraw from current balance
myAccount.withdrawal(2000);