const getMutualFriends = (userOne, userTwo) => {
  const friendsOne = userOne.getFriends();
  const friendsTwo = userTwo.getFriends();
  const arr = friendsOne.map((item) => friendsTwo.filter((elem) => item.id === elem.id));
  return arr.flat();
};
export default getMutualFriends;
