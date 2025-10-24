"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


// Task 4.1 – Bank Account System

// Part 1: Account types
// Defines account types in an object
const AccountType = {
    Normal: "Brukskonto",
    Saving: "Sparekonto",
    Credit: "Kredittkonto",
    Pension: "Pensjonskonto"
}

printOut(`${AccountType.Normal}, ${AccountType.Saving}, ${AccountType.Credit}, ${AccountType.Pension}`); // Brukskonto, Sparekonto, Kredittkonto, Pensjonskonto

printOut(newLine);


// Prints all account types and separates them with commas
printOut(Object.values(AccountType).join(", "));

// Part 5: Currency Types
// Object that holds information for each currency
// Object inside an object
const CurrencyTypes = {
    NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
    EUR: { value: 0.0958, name: "Europeiske euro", denomination: "€" },
    USD: { value: 0.1093, name: "United States dollar", denomination: "$" },
    GBP: { value: 0.0821, name: "Pound sterling", denomination: "£" },
    INR: { value: 9.0909, name: "indiske rupee", denomination: "₹" },
    AUD: { value: 0.1670, name: "Australienske dollar", denomination: "A$" },
    PHP: { value: 6.0000, name: "Filippinske peso", denomination: "₱" },
    SEK: { value: 1.0258, name: "Svenske kroner", denomination: "kr" },
    CAD: { value: 0.1330, name: "Canadiske dollar", denomination: "C$" },
    THB: { value: 3.9200, name: "Thai baht", denomination: "฿" }
};

// Parts 2–7: TAccount Class
// Class representing a bank account
class TAccount {
    // # Means private field, not accessible from outside the class
    #type;
    #balance = 0;
    // Counts the number of withdrawals made (for Saving accounts)
    #withdrawCount = 0;
    // Holds the currency type of the account, starting with NOK
    #currencyType = CurrencyTypes.NOK;

    // Constructor to initialize account type. A constructor is called when creating a new instance of the class.
    constructor(aType) {
        // this refers to the current instance of the class
        this.#type = aType;
    }

    // Private helper for currency conversion. its private because a hash (#) is used
    #currencyConvert(fromType, toType, amount) {
        // Convert to NOK first
        const inNOK = amount / fromType.value; 
        // returns amount in new currency
        return inNOK * toType.value;
    }

    // Public Methods

    // Returns the account type as a string for printing
    toString() {
        return this.#type;
    }

    // Method to change account type
    setType(aType) {
        // if the type is the same, do nothing
        if (aType === this.#type) return;
        // save old type for printing, meaning that we need a temporary variable
        let oldType = this.#type;
        // change to new type
        this.#type = aType;
        // reset withdrawal count
        this.#withdrawCount = 0; // reset on change
        printOut(`Account is changed from ${oldType} to ${aType}`);
    }

    // Method to get the current balance
    getBalance() {
        return this.#balance;
    }

    // Method to deposit money into the account
    // aType = CurrencyTypes.NOK means default value is NOK if no currency is provided
    deposit(aAmount, aType = CurrencyTypes.NOK) {
        // Reset withdrawal counter
        this.#withdrawCount = 0;

        // Convert deposit currency to account currency
        let convertedAmount = this.#currencyConvert(aType, this.#currencyType, aAmount);
        // add the converted amount to the private balance
        this.#balance += convertedAmount;

        // Print deposit information
        printOut(`Deposit of ${aAmount.toFixed(2)}${aType.denomination}, new balance is ${this.#balance.toFixed(2)}${this.#currencyType.denomination}`);
    }

    // Public method to withdraw money from the account
    // aType = CurrencyTypes.NOK means default value is NOK if no currency is provided
    withdraw(aAmount, aType = CurrencyTypes.NOK) {
        // use switch to handle different account types, executes different code based on account type
        switch (this.#type) {
            // if pension account, withdrawal not allowed
            case AccountType.Pension:
                printOut(`You can't withdraw from a ${AccountType.Pension}!`);
                // Block further withdrawals
                return;

            // if saving account, limit to 3 withdrawals
            case AccountType.Saving:
                if (this.#withdrawCount >= 3) {
                    printOut(`You can't Withdraw from a ${AccountType.Saving} more than three times!`);
                    return;
                }
                // Increment withdrawal count
                this.#withdrawCount++;
                // break to continue with withdrawal
                break;
        }

        // Convert withdrawal currency to account currency
        let convertedAmount = this.#currencyConvert(aType, this.#currencyType, aAmount);

        // Check if the account has enough balance
        if (convertedAmount > this.#balance) {
            // if not enough money, print a message and stop the withdrawal
            printOut(`Insufficient funds!`);
            return;
        }

        // Subtract the converted amount from the private balance
        this.#balance -= convertedAmount;
        // Print withdrawal information
        printOut(`Withdrawal of ${aAmount.toFixed(2)}${aType.denomination}, new balance is ${this.#balance.toFixed(2)}${this.#currencyType.denomination}`);
    }

    // Change the currency type of the account
    setCurrencyType(aType) {
        // if the new currency type is the same as the current one, do nothing
        if (aType === this.#currencyType) return;

        // Save the current currency object in a temporary variable
        // Needed for conversion
        let oldCurrency = this.#currencyType;
        // Convert the current balance from old currency to new currency
        // Uses the private currency conversion method
        this.#balance = this.#currencyConvert(oldCurrency, aType, this.#balance);
        // Update the account's currency type to the new type
        // now the account "remembers" that it's using the new currency.
        this.#currencyType = aType;

        printOut(`The account currency has changed from ${oldCurrency.name} to ${aType.name}`);
        printOut(`New balance is ${this.#balance.toFixed(2)}${aType.denomination}`);
    }
}


// Demonstration of All Parts

// Part 2
const myAccount = new TAccount(AccountType.Normal);
printOut(`myAccount = ${myAccount.toString()}`);
myAccount.setType(AccountType.Saving);
printOut(`myAccount = ${myAccount.toString()}`);

// Part 3
myAccount.deposit(100);
myAccount.withdraw(25);
printOut(`My account balance is ${myAccount.getBalance()}`);

// Part 4
myAccount.deposit(25);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30); // 4th attempt - blocked
myAccount.setType(AccountType.Pension);
myAccount.withdraw(10);
myAccount.setType(AccountType.Saving);
myAccount.withdraw(10);

// Part 5
myAccount.deposit(150);
printOut(`Deposit of 150${CurrencyTypes.NOK.denomination}, new balance is ${myAccount.getBalance().toFixed(2)}${CurrencyTypes.NOK.denomination}`);

// Part 6
myAccount.setCurrencyType(CurrencyTypes.SEK);
myAccount.setCurrencyType(CurrencyTypes.USD);
myAccount.setCurrencyType(CurrencyTypes.NOK);

// Part 7
myAccount.deposit(12, CurrencyTypes.USD);
myAccount.withdraw(10, CurrencyTypes.GBP);
myAccount.setCurrencyType(CurrencyTypes.CAD);
myAccount.setCurrencyType(CurrencyTypes.INR);
myAccount.withdraw(150.11, CurrencyTypes.SEK);
