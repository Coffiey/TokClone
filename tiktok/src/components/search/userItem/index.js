import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { Avatar } from "react-native-paper";

export default function SearchUserItem({ item }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{item.displayName || "No Username Set"}</Text>
      {/* <Image
        source={item.photoURL ? { uri: item.photoURL } : { uri: item.photoURL }}
        style={styles.image}
      /> */}

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
