import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import styles from "./style";
import { useDispatch } from "react-redux";
import { register, login } from "../../../redux/actions";

export default function AuthDetails(props) {
  const { authPage, setDetailsPage } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const handleLogin = (e) => {
    console.log("clicked");
    e.preventDefault();
    dispatch(login(email, password))
      .then(() => {
        console.log("Log In Successful");
      })
      .catch(() => {
        console.log("Log In Unsuccessful");
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register(email, password))
      .then(() => {
        console.log("Registration Successful");
      })
      .catch(() => {
        console.log("Registration Unsuccessful");
      });
  };

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
        secureTextEntry
        placeholder='Password'
      />
      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={(e) => (authPage ? handleRegister(e) : handleLogin(e))}
        >
          {authPage ? "Sign Up" : "Sign In"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
