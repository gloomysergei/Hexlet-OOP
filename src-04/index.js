/* eslint-disable quotes */
// this.x = 9;

const module = {
  x: 81,
  getX() {
    return this.x;
  },
};

console.log(module.getX());
