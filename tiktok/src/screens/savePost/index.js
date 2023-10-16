import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import styles from "./styles";
// import { TouchableOpacity } from "react-native-web";
import { StackActions, useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/actions";
import { ActivityIndicator } from "react-native-paper";

export default function SavePostScreen(props) {
  const navigation = useNavigation();
  const [description, setDescription] = useState("");
  const [requestRunning, setRequestRunning] = useState(false);

  const dispatch = useDispatch();
  const handleSavePost = () => {
    setRequestRunning(true);
    dispatch(
      createPost(
        description,
        props.route.params.source,
        props.route.params.sourceThumb
      )
    )
      .then(() => {
        navigation.dispatch(StackActions.popToTop());
      })
      .catch((err) => setRequestRunning(false));
  };
  if (requestRunning) {
    return (
      <View style={styles.uploadContainer}>
        <ActivityIndicator
          color='red'
          size='large'
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.inputText}
          multiline
          maxLength={150}
          placeholder='Describe your Video'
          onChangeText={(text) => setDescription(text)}
        />
        <Image
          style={styles.mediaPreview}
          source={{ uri: props.route.params.source }}
        />
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.cancelButton}
        >
          <Feather
            name='x'
            size={24}
            color='black'
          />
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleSavePost()}
          style={styles.postButton}
        >
          <Feather
            name='corner-left-up'
            size={24}
            color='white'
          />
          <Text style={styles.postButtonText}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
