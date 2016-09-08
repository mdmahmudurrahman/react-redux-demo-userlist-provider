export const selectUser = (user) => {
  console.log("clicked on a user: " + user.id);
  return {
    type: "USER_SELECTED",
    payload: user
  }
};
