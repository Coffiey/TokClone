import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useUser } from "../../../../hooks/useUser";
import { auth } from "../../../../../App";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const ChatListItem = ({ chat }) => {
  const { data: userData } = useUser(
    chat.members[0] === auth.currentUser.uid ? chat.members[1] : chat.members[0]
  );
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("chatSingle", { chatId: chat.id })}
    >
      {userData && (
        <>
          <Image
            style={styles.image}
            source={{ uri: userData.photoURL }}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.userNameText}>{userData.displayName}</Text>
            <Text style={styles.lastMessage}>{chat.lastMessage}</Text>
          </View>
          <Text style={styles.date}>
            {chat.lastUpdate
              ? new Date(chat.lastUpdate.seconds * 1000)
                  .toISOString()
                  .slice(0, 10)
              : "Now"}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default ChatListItem;
