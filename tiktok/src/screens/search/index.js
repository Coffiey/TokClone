import { View, Text, TextInput, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import SearchUserItem from "../../components/search/userItem";
import { queryUserByEmail } from "../../services/user";

export default function SearchScreen() {
  const [textInput, setTextInput] = useState("");
  const [searchUsers, setSearchUsers] = useState([]);
  useEffect(() => {
    if (!textInput == "") {
      queryUserByEmail(textInput).then(setSearchUsers);
    } else {
      setSearchUsers([]);
    }
  }, [textInput]);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        onChangeText={(e) => setTextInput(e.toLowerCase())}
        style={styles.TextInput}
        placeholder='Search'
      />
      <FlatList
        data={searchUsers}
        renderItem={SearchUserItem}
        keyExtractor={(i, index) => index}
      />
    </SafeAreaView>
  );
}
