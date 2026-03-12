// CLOSURES in JavaScript

// Basic closure
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2

// Advanced: data privacy
function createBankAccount(initialBalance) {
  let balance = initialBalance;
  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount <= balance) balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    },
  };
}
const account = createBankAccount(100);
console.log("Deposit:", account.deposit(50));
console.log("Withdraw:", account.withdraw(30));
console.log("Balance:", account.getBalance());
