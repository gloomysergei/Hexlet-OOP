function getX() {
  return this.x;
}
function getY() {
  return this.y;
}

function Point(x, y) {
  return {
    x,
    y,
    getX,
    getY,
  };
}
export default Point;
