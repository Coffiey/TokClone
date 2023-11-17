import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback, useState } from "react";
import { chatListener, createChat, messageListener } from "../services/chat";
import { setChats } from "../redux/actions/chat";

export const useMessages = (chatId, contactId) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((State) => State.auth.currentUser);
  const chats = useSelector((State) => State.chat.list);
  const [messages, setMessages] = useState([]);
  const [chatIdInstance, setChatIdInstance] = useState(chatId);
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
    if (!chatIdInstance) {
      let chat = chats.find((item) =>
        item.members.some((member) => member === contactId)
      );
      if (chat) {
        //set chat instance
        setChatIdInstance(chat.id);
      } else {
        //create chat instance
        createChat(contactId).then((res) => setChatIdInstance(res.id));
      }
    }
    if (currentUser && chatIdInstance) {
      listenerInstance = messageListener(handleMessagesChange, chatId);
    }
    return () => {
      listenerInstance && listenerInstance();
    };
  }, [handleMessagesChange, currentUser]);

  return { messages, chatIdInstance };
};
