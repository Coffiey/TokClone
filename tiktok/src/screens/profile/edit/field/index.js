import { View, Text, TextInput } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";
import NavBarGeneral from "../../../../components/general/navBar";
import { Divider } from "react-native-paper";
import generalStyles from "../../../../styles/generalStyles";
import { saveUserField } from "../../../../services/user";
import { useNavigation } from "@react-navigation/native";

export default function EditProfileFieldScreen({ route }) {
  const { title, field, value } = route.params;
  const [textInputValue, setTextInputValue] = useState(value);
  const navigation = useNavigation();
  const onSave = async () => {
    await saveUserField(field, textInputValue);
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <NavBarGeneral
        title={title}
        leftButton={{ display: true, name: "save", action: onSave }}
      />
      <Divider />
      <View style={styles.mainContainer}>
        <Text style={styles.title}>{title}</Text>
        <TextInput
          style={generalStyles.testInput}
          onChangeText={setTextInputValue}
          value={textInputValue}
        />
      </View>
    </SafeAreaView>
  );
}
