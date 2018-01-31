console.log("JS TEST");

let piggyBank = {pennies: 100, nickels: 20, dimes: 10, quarters: 4};
let pennyDoll = (piggyBank.pennies / 100);
let nickelDoll = (piggyBank.nickels / 20);
let dimeDoll = (piggyBank.dimes / 10);
let quarterDoll = (piggyBank.quarters / 4);
let dollarAmount = (pennyDoll + nickelDoll + dimeDoll + quarterDoll);

console.log("Dollar Amount = $", dollarAmount);