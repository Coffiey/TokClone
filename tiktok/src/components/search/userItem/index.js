import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function SearchUserItem({ item }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate("profileOther", {
          initaUserId: item.uid,
        })
      }
    >
      <Text style={styles.text}>{item.displayName || "No Username Set"}</Text>
      {item.photoURL ? (
        <Avatar.Image
          style={styles.image}
          size={40}
          source={{
            uri: item.photoURL,
          }}
        />
      ) : (
        <Avatar.Icon
          style={styles.image}
          size={40}
          icon={"account"}
        />
      )}
    </TouchableOpacity>
  );
}
