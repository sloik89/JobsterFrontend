export const addUserToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};
export const removeUserFormLocalStoreage = () => {
  localStorage.removeItem("user");
};
export const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("user");
  if (!user) {
    return null;
  }
  return JSON.parse(user);
};
