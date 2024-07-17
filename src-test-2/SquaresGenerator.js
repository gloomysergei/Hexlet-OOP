/* eslint-disable quotes */
import Square from "./Square.js";

class SquaresGenerator {
  static generate(side, numberCopies = 5) {
    const copies = [];
    for (let i = 0; i < numberCopies; i += 1) {
      copies.push(new Square(side));
    }
    return copies;
  }
}
export default SquaresGenerator;
