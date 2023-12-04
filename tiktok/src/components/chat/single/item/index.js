import { View, Text, Image } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles";
import { useUser } from "../../../../hooks/useUser";
import { auth } from "../../../../../App";

const ChatSingleItem = ({ item, messages }) => {
  const { data: userData, isLoading } = useUser(item.creator);
  if (isLoading) return <></>;
  const [showImage, setShowImage] = useState(false);
  const isCurrentUser = item.creator === auth.currentUser.uid;

  useEffect(() => {
    const index = messages.findIndex(
      (message) => messages[0].creator !== message.creator
    );
    if (messages[0].id === item.id || messages[index].id === item.id) {
      setShowImage(true);
    }
  }, [messages]);

  return (
    <View style={isCurrentUser ? styles.container : styles.containerOther}>
      {showImage && (
        <Image
          style={styles.avatar}
          source={{ uri: userData.photoURL }}
        />
      )}
      <View
        style={
          isCurrentUser ? styles.containerTabOver : styles.containerTabOverOther
        }
      ></View>
      <View
        style={
          isCurrentUser ? styles.containerTabText : styles.containerTabTextOther
        }
      ></View>
      <View
        style={isCurrentUser ? styles.containerText : styles.containerTextOther}
      >
        <Text>{item.message}</Text>
      </View>
    </View>
  );
};

export default ChatSingleItem;
