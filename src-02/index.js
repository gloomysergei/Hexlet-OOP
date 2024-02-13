/* eslint-disable quotes */
import makeUser from "./user.js";
import getMutualFriends from "./users.js";

const user1 = makeUser({
  friends: [makeUser({ id: 2 }), makeUser({ id: 8 }), makeUser({ id: 100 })],
});
const user2 = makeUser({
  friends: [makeUser({ id: 2 }), makeUser({ id: 7 }), makeUser({ id: 8 })],
});
const mutualFriends = getMutualFriends(user1, user2);
console.log(mutualFriends);
