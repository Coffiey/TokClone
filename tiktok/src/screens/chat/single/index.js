import { View, TextInput, TouchableOpacity, FlatList } from "react-native";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import ChatSingleItem from "../../../components/chat/single/item";
import { useMessages } from "../../../hooks/useMessges";
import { SafeAreaView } from "react-native-safe-area-context";
import NavBarGeneral from "../../../components/general/navBar";
import { sendMessage } from "../../../services/chat";

const ChatSingleScreen = ({ route }) => {
  const { chatId, contactId } = route.params;
  const [message, setMessage] = useState("");
  const chatRef = useRef();

  const currentUser = useSelector((state) => state.auth.currentUser);
  const { messages, chatIdInstance } = useMessages(chatId, contactId);
  const renderItem = ({ item }) => {
    return <ChatSingleItem item={item} />;
  };
  const handleCommentSend = () => {
    if (message.length == 0) return;
    sendMessage(chatIdInstance, message);
    setMessage("");
  };

  // useEffect(() => {
  //   console.log(messages.length);
  //   if (messages) {
  //     setTimeout(() => {
  //       chatRef.current.scrollToEnd();
  //     }, 100);
  //   }
  // }, [messages]);

  return (
    <SafeAreaView style={styles.container}>
      <NavBarGeneral title='chat' />
      <FlatList
        inverted
        // ref={chatRef}
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.containerInput}>
        <TextInput
          value={message}
          style={styles.input}
          placeholder='message...'
          onChangeText={setMessage}
        />
        <TouchableOpacity onPress={handleCommentSend}>
          <Ionicons
            name='arrow-up-circle'
            size={34}
            color='crimson'
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChatSingleScreen;
