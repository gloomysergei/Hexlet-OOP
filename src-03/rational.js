/* eslint-disable quotes */
const make = (numer, denom) => {
  const result = {
    numer,
    denom,

    getNumer() {
      return this.numer;
    },

    getDenom() {
      return this.denom;
    },

    setNumer(value) {
      this.numer = value;
    },

    setDenom(value) {
      this.denom = value;
    },

    toString() {
      return `${this.numer}/${this.denom}`;
    },

    add(rational) {
      const a = this.numer;
      const b = this.denom;
      const c = rational.getNumer();
      const d = rational.getDenom();
      const newNumer = a * d + b * c;
      const newDenom = b * d;
      return make(newNumer, newDenom);
    },
  };
  return result;
};

export default make;
