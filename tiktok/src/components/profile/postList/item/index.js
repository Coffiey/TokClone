import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function ProfilePostListItem({ item }) {
  const navigate = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigate.navigate("userPosts", { creator: item.creator, profile: true })
      }
    >
      <Image
        style={styles.image}
        source={{ uri: item.media[1] }}
      />
    </TouchableOpacity>
  );
}
