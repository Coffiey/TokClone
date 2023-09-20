import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import styles from "./style";

export default function AuthDetails(props) {
  const { authPage, setDetailsPage } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setDetailsPage(false)}>
        <Feather
          name='arrow-left'
          size={24}
          color='black'
        />
      </TouchableOpacity>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setEmail(text)}
        placeholder='Email'
      />
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setPassword(text)}
        placeholder='Password'
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          {authPage ? "Sign Up" : "Sign In"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
