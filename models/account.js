const moment = require("moment");


class Account {
  name;
  #amount;
  #account_id;

  constructor(name, amount, account_id) {
    this.name = name;
    this.#amount = amount;
    this.#account_id = account_id;
  }

  myBalance() {
    console.log("Your balance:", this.#amount);
    return this.#amount;
  }

  withdrawal(enteredAmount) {
    if (this.#amount >= enteredAmount) {
      this.#amount = this.#amount - enteredAmount;
      console.log(
        `Success! Your have withdrawn -${enteredAmount}$, and your balance is ${this.#amount}$`
      );
    } else {
      console.log("Your balance is not enough to wirthdrow money");
    }
  }

  deposit(enteredAmount) {
    this.#amount = this.#amount + enteredAmount;
    console.log(
      `Success! You have deposited +${enteredAmount}$, and your balance is ${this.#amount}$`
    );
  }

  details() {
    console.log(`Hello dear ${this.name}. Your balance is ${this.#amount}$`);
    console.log(`Your account id is: ${this.#account_id}`);
  }

  static tellMeAboutClass(){
    console.log("This class is for creating accounts");
  }

  static time(){
    const time = moment().format("YYYY-MM-DD hh:mm:ss");
    console.log("Date:", time);
  }
}

module.exports = Account