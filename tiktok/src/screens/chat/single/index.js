import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import {
  addComment,
  clearCommentListner,
  commentListner,
} from "../../../services/post";
import CommentItem from "./item";
import ChatSingleItem from "../../../components/chat/single/item";
import { useMessages } from "../../../hooks/useMessges";
import { SafeAreaView } from "react-native-safe-area-context";
import NavBarGeneral from "../../../components/general/navBar";
import { sendMessage } from "../../../services/chat";

const ChatSingleScreen = ({ route }) => {
  const { chatId } = route.params;
  const [message, setMessage] = useState("");
  const currentUser = useSelector((state) => state.auth.currentUser);
  const { messages } = useMessages(chatId);

  const renderItem = ({ item }) => {
    return <ChatSingleItem item={item} />;
  };
  const handleCommentSend = async () => {
    if (message.length == 0) return;
    sendMessage(chatId, message);
    setMessage("");
  };
  return (
    <SafeAreaView style={styles.container}>
      <NavBarGeneral title='chat' />
      <FlatList
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
