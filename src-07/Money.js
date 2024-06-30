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

Money.prototype.add = function (transferredMoney) {
  const transferredValue = transferredMoney
    .exchangeTo(this.currency)
    .getValue();
  const sourceValue = this.value;
  const newValue = transferredValue + sourceValue;
  return new Money(newValue, this.currency);
};

Money.prototype.format = function (money) {};

export default Money;

/**
 * `Money.prototype.add(money)` – возвращает новый объект деньги, который представляет
 *  собой сумму исходных и переданных денег, в валюте исходных денег
 *  (внутри возможна конвертация если валюты не совпадают)
 * исходные деньги - source money
 * переданные деньги - transferred money
 */
