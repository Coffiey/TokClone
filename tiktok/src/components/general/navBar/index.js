import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function NavBarGeneral({
  title = "navebarGeneral",
  leftButton = { display: false },
}) {
  const naviagation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => naviagation.goBack()}
      >
        <Feather
          name='arrow-left'
          size={26}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => leftButton.display && leftButton.action()}
      >
        <Feather
          name={leftButton.name}
          size={26}
          color={leftButton.display ? "pink" : "white"}
        />
      </TouchableOpacity>
    </View>
  );
}
