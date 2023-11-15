import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback, useState } from "react";
import { chatListener, messageListener } from "../services/chat";
import { setChats } from "../redux/actions/chat";

export const useMessages = (chatId) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((State) => State.auth);
  const [messages, setMessages] = useState([]);
  const handleMessagesChange = useCallback(
    (change) => {
      setMessages(
        setChats(change.docs.map((item) => ({ id: item.id, ...item.data() })))
      );
    },
    [dispatch]
  );

  useEffect(() => {
    let listenerInstance;
    if (currentUser) {
      listenerInstance = messageListener(handleMessagesChange, chatId);
    }
    return () => {
      listenerInstance && listenerInstance();
    };
  }, [handleMessagesChange, currentUser]);

  return { messages };
};
