import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import NavBarGeneral from "../../../components/general/navBar";
import { Feather } from "@expo/vector-icons";
import styles from "./style";
import * as ImagePicker from "expo-image-picker";
import { saveUserProfileImage } from "../../../services/user";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export default function EditPorfileScreen() {
  const navigation = useNavigation();
  const auth = useSelector((state) => state.auth);
  const chooseIamge = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      saveUserProfileImage(result.assets[0].uri);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <NavBarGeneral />
      <View style={styles.imageContainer}>
        <TouchableOpacity
          style={styles.imageViewContainer}
          onPress={() => chooseIamge()}
        >
          <Image
            style={styles.image}
            source={{
              uri: auth.currentUser.photoURL,
            }}
          />
          <View style={styles.imnageOverlay} />
          <Feather
            name='camera'
            size={26}
            color={"white"}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.fieldsContainer}>
        <TouchableOpacity
          style={styles.fieldsItemContainer}
          onPress={() =>
            navigation.navigate("editProfileField", {
              title: "Display Name",
              field: "displayName",
              Value: auth.currentUser.displayName,
            })
          }
        >
          <Text>Dsplay Name</Text>
          <View style={styles.fieldsValueContainer}>
            <Text>Display Name</Text>
            <Feather
              name='chevron-right'
              size={20}
              color='grey'
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
