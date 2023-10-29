import { useMutation, useQuery, useQueryClient } from "react-query";
import { keys } from "./queryKeys";
import { changeFollowingState } from "../services/user";
import { auth } from "../../App";

export const useFollowingMutation = (options = {}) => {
  const queryClient = useQueryClient();
  return useMutation(changeFollowingState, {
    ...options,
    onMutate: (variables) => {
      queryClient.setQueryData(
        keys.userFollowing(auth.currentUser.uid, variables.otherUserId),
        !variables.isFollowing
      );
    },
  });
};
