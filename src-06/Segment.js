/* eslint-disable quotes */

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
