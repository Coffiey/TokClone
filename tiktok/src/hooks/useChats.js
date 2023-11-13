import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback } from "react";
import { chatListener } from "../services/chat";
import { setChats } from "../redux/actions/chat";

export const useChats = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((State) => State.auth);
  const handleChatsChange = useCallback(
    (change) => {
      dispatch(
        setChats(change.docs.map((item) => ({ id: item.id, ...item.data() })))
      );
    },
    [dispatch]
  );

  useEffect(() => {
    let listenerInstance;
    if (currentUser) {
      listenerInstance = chatListener(handleChatsChange);
    }
    return () => {
      listenerInstance && listenerInstance();
    };
  }, [currentUser]);
};
