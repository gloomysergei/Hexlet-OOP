function getX() {
  return this.x;
}
function getY() {
  return this.y;
}

function Point(x, y) {
  this.x = x;
  this.y = y;
  this.getX = getX;
  this.getY = getY;
}
export default Point;

// const point = new Point(10, 89);
// console.log(point.getX());
// console.log(point);
