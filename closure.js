/* const bank = (owner) => {
  balance = 0;
  return (amount) => {
    // balance = balance + amount;
    balance += amount;
    return balance;
  };
};
 */

const bank = (owner) => {
  balance = 0;
  return {
    deposit: (amount) => {
      balance += amount;
      return balance;
    },
    withdraw: (amount) => {
      balance -= amount;
      return balance;
    },
  };
};

// const cityBank = bank("city");
// // cityBank(100);
// console.log(cityBank(100));
// console.log(cityBank(100));
// console.log(cityBank(150));
// console.log(cityBank.balance);
// console.log(cityBank(190));

const cityBank = bank("city");
console.log(cityBank.deposit(100));
console.log(cityBank.deposit(100));
console.log(cityBank.deposit(150));
console.log(cityBank.balance);
console.log(cityBank.deposit(190));
console.log(cityBank.withdraw(100));
