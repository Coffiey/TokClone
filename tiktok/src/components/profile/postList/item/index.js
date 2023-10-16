import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";

export default function ProfilePostListItem({ item }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: item.media[1] }}
      />
    </View>
  );
}
