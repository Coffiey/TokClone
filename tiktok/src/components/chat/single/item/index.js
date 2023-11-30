import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { useUser } from "../../../../hooks/useUser";
import { auth } from "../../../../../App";

const ChatSingleItem = ({ item }) => {
  const { data: userData, isLoading } = useUser(item.creator);
  const obj = useUser(item.creator);
  if (isLoading) return <></>;
  const isCurrentUser = item.creator === auth.currentUser.uid;
  return (
    <View style={isCurrentUser ? styles.container : styles.containerOther}>
      <Image
        style={styles.avatar}
        source={{ uri: userData.photoURL }}
      />
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
