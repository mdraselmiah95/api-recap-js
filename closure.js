const bank = (owner) => {
  balance = 0;
  return (amount) => {
    // balance = balance + amount;
    balance += amount;
    return balance;
  };
};

const cityBank = bank("city");
// cityBank(100);
console.log(cityBank(100));
console.log(cityBank(100));
console.log(cityBank(150));
console.log(cityBank.balance);
console.log(cityBank(190));
