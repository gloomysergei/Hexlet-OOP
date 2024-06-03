/* eslint-disable quotes */
import Point from "./Point.js";

function getBeginPoint() {
  return this.beginPoint;
}
function getEndPoint() {
  return this.endPoint;
}
function Segment(beginPoint, endPoint) {
  this.beginPoint = beginPoint;
  this.endPoint = endPoint;
  this.getBeginPoint = getBeginPoint;
  this.getEndPoint = getEndPoint;
}
export default Segment;

const onePoint = new Point(5, 10);
const twoPoint = new Point(100, 56);
const segment = new Segment(onePoint, twoPoint);
console.log(segment.getBeginPoint().getX());
