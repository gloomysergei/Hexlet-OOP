/* eslint-disable func-names */
/* eslint-disable quotes */
// @ts-check
// BEGIN (write your solution here)
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
// END
export default Money;
