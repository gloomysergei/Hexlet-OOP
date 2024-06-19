/* eslint-disable no-case-declarations */
/* eslint-disable func-names */
/* eslint-disable quotes */
// @ts-check

function Money(value, currency = "usd") {
  this.value = value;
  this.currency = currency;
}

Money.prototype.getValue = function () {
  return this.value;
};
Money.prototype.getCurrency = function () {
  return this.currency;
};
Money.prototype.exchangeTo = function (currency) {
  const currentCurrency = this.currency;
  let obj;
  switch (currentCurrency) {
    case "currency":
      obj = new Money(this.value, currency);
      break;

    case "eur":
      obj = new Money(this.value * 1.2, currency);
      break;

    case "usd":
      obj = new Money(this.value * 0.7, currency);
      break;

    default:
      break;
  }
  return obj;
};
Money.prototype.add = (money) => {
  const currentValue = money.getValue; // получили текущую сумму
  const currentCurrency = money.getCurrence; // получили текущую валюту
};
const money = new Money(100);
// console.log(money.exchangeTo("eur"));
// console.log(money.exchangeTo("usd"));
console.log(money.add(200));
