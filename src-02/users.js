const getMutualFriends = (userOne, userTwo) => {
  const friendsOne = userOne.getFriends(); // [] массив для меня абстракция
  const friendsTwo = userTwo.getFriends(); // []
  const arr = friendsOne.filter(({ item }) => friendsTwo.includes({ item }));
  return arr;
};
export default getMutualFriends;
