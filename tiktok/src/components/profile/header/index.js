import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { Avatar } from "react-native-paper";
import { buttonStyles } from "../../../styles";

export default function ProfileHeader({ user }) {
  return (
    <View style={styles.container}>
      <Avatar.Icon
        size={80}
        icon={"account"}
      />
      <Text style={styles.emailText}>{user.email}</Text>
      <View style={styles.counterContianer}>
        <View style={styles.counterItemContainer}>
          <Text style={styles.counterNumberText}>0</Text>
          <Text style={styles.counterLabelText}>Following</Text>
        </View>
        <View style={styles.counterItemContainer}>
          <Text style={styles.counterNumberText}>0</Text>
          <Text style={styles.counterLabelText}>Followers</Text>
        </View>
        <View style={styles.counterItemContainer}>
          <Text style={styles.counterNumberText}>0</Text>
          <Text style={styles.counterLabelText}>Likes</Text>
        </View>
      </View>
      <TouchableOpacity style={buttonStyles.greyOutlineButton}>
        <Text>EDIT Profile</Text>
      </TouchableOpacity>
    </View>
  );
}