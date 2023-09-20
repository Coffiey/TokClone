import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";
import { Feather } from "@expo/vector-icons";

export default function AuthMenu(props) {
  const { authPage, setAuthPage, detailsPage, setDetailsPage } = props;
  return (
    <View style={styles.container}>
      <View style={styles.containerMain}>
        <Text style={styles.headerText}>{authPage ? "Sign Up" : "Log In"}</Text>
        <TouchableOpacity
          style={styles.providerButton}
          onPress={() => setDetailsPage(true)}
        >
          <Feather
            name='user'
            size={24}
            color='black'
          ></Feather>
          <Text style={styles.providerButtonText}>Use Email</Text>
          <View />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.containerBottomButton}
        onPress={() => (authPage == 0 ? setAuthPage(1) : setAuthPage(0))}
      >
        {authPage == 0 ? (
          <Text>
            Don't have an acount?{" "}
            <Text style={styles.containerBottomButtonText}>Sign Up</Text>
          </Text>
        ) : (
          <Text>
            Already have an acount?{" "}
            <Text style={styles.containerBottomButtonText}>Sign In</Text>
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
