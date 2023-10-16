import { View, Text, FlatList } from "react-native";
import React from "react";
import styles from "./stlyes";
import ProfilePostListItem from "./item";

export default function ProfilePostList({ posts }) {
  console.log(posts);
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={3}
        removeClippedSubviews
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProfilePostListItem item={item} />}
      />
    </View>
  );
}
