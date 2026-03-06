class BankAccount {
  #balance;

  constructor(balance) {
    this.#balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount(1000);
acc.deposit(500);
acc.withdraw(200);
console.log(acc.getBalance());
console.log(acc);

