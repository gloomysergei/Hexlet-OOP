/* eslint-disable quotes */
import Point from "./Point.js";
import Segment from "./Segment.js";

const reverse = (segment) => {
  const beginPoint = segment.getBeginPoint();
  const endPoint = segment.getEndPoint();
  const beginPointCopy = new Point(beginPoint.getX(), beginPoint.getY());
  const endPointCopy = new Point(endPoint.getX(), endPoint.getY());
  const reverseSegment = new Segment(endPointCopy, beginPointCopy);
  return reverseSegment;
};
export default reverse;
