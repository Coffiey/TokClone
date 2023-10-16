import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";
import NavBarGeneral from "../../../../components/general/navBar";
import { Divider } from "react-native-paper";

export default function EditProfileFieldScreen({ route }) {
  const { title, field, value } = route.params;
  const onSave = () => {
    console.log("SUCK MY DICK");
  };
  return (
    <SafeAreaView style={styles.container}>
      <NavBarGeneral
        title={title}
        leftButton={{ display: true, name: "save", action: onSave }}
      />
      <Divider />
    </SafeAreaView>
  );
}
