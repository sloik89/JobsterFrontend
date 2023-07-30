import { toast } from "react-toastify";
import { getUserFromLocalStorage } from "./localStorage";

export const checkTestUser = () => {
  const user = getUserFromLocalStorage();
  if (user.email === "testUser@test.com") {
    return true;
  }
  return false;
};
