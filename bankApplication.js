// Assignment 2 Task 1
function Account(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
// Task 2
    this.deposit = function(amount) {
        if (amount > 0) {
            this.balance += amount;
            return `Deposited $${amount}. New balance is $${this.balance}.`;
        } else {
            return "Deposit amount must be positive.";
        }
    };

    this.withdraw = function(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            return `Withdrew $${amount}. New balance is $${this.balance}.`;
        } else if (amount > this.balance) {
            return "Insufficient funds.";
        } else {
            return "Withdrawal amount must be positive.";
        }
    };
// Task 3
    this.calculateInterest = function(rate, timesCompounded, years) {
        const compoundInterest = this.balance * Math.pow((1 + rate / timesCompounded), timesCompounded * years);
        return `After ${years} years at a ${rate * 100}% interest rate, your balance will be $${compoundInterest.toFixed(2)}.`;
    };
}

// Example usage:
let account1 = new Account(101, 1000, 'Alice');
console.log(account1.deposit(200));
console.log(account1.withdraw(100));
console.log(account1.calculateInterest(0.05, 12, 10)); 