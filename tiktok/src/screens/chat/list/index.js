import { View, Text, FlatList } from "react-native";
import React from "react";
import NavBarGeneral from "../../../components/general/navBar";
import { SafeAreaView } from "react-native-safe-area-context";
import ChatListItem from "../../../components/chat/list/item";

const ChatScreen = () => {
  const renderItem = ({ item }) => {
    return <ChatListItem chat={item} />;
  };
  return (
    <SafeAreaView>
      <NavBarGeneral leftButton={{ display: fals }} />
      <FlatList
        data={[
          {
            lastUpdate: new Date(),
            lastMessage: "test",
            members: ["member 1", "member 2"],
          },
        ]}
        removeClippedSubviews
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default ChatScreen;
