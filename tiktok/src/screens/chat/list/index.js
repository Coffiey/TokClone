import { View, Text, FlatList } from "react-native";
import React from "react";
import NavBarGeneral from "../../../components/general/navBar";
import { SafeAreaView } from "react-native-safe-area-context";

const ChatScreen = () => {
  const renderItem = () => {
    return <></>;
  };
  return (
    <SafeAreaView>
      <NavBarGeneral leftButton={{ display: fals }} />
      <FlatList
        data={[]}
        removeClippedSubviews
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default ChatScreen;
