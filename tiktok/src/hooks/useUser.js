import { useQuery } from "react-query";
import { USER_KEY } from "./queryKeys";
import { getUserById } from "../services/user";

export const useUser = (userId, options = {}) => {
  return useQuery([USER_KEY, userId], () => getUserById(userId), options);
};
