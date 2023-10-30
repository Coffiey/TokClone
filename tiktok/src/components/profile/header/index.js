import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { Avatar } from "react-native-paper";
import { buttonStyles } from "../../../styles";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { useFollowing } from "../../../hooks/useFollowing";
import { useFollowingMutation } from "../../../hooks/useFollowingMutation";

export default function ProfileHeader({ user }) {
  const auth = useSelector((state) => state.auth);
  const navigation = useNavigation();
  const isFollowing = useFollowing(auth.currentUser.uid, user.uid).data;
  const isFollowingMutation = useFollowingMutation();

  const renderFollowButton = () => {
    if (isFollowing) {
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={buttonStyles.greyOutlineButton}
          // onPress={() => navigation.navigate("editProfile")}
        >
          <Text style={buttonStyles.greyOutlineButtonText}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={buttonStyles.filledButton}
          onPress={() =>
            isFollowingMutation.mutate({ otherUserId: user.uid, isFollowing })
          }
        >
          <Feather
            name='user-check'
            size={20}
          />
          <Text style={buttonStyles.filledButtonText}>Un-Follow</Text>
        </TouchableOpacity>
      </View>;
    } else {
      return (
        <TouchableOpacity
          style={buttonStyles.filledButton}
          onPress={() =>
            isFollowingMutation.mutate({ userId: user.uid, isFollowing })
          }
        >
          <Text style={buttonStyles.filledButtonText}>Follow</Text>
        </TouchableOpacity>
      );
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.bannerContainer}></View>
      <View style={styles.infoContainer}>
        {auth.currentUser.photoURL ? (
          <Image
            style={styles.avatar}
            source={{
              uri: auth.currentUser.photoURL,
            }}
          />
        ) : (
          <Avatar.Icon
            style={styles.IconAvatar}
            size={80}
            icon={"account"}
          />
        )}
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
        {auth.currentUser.uid === user.uid ? (
          <TouchableOpacity
            style={buttonStyles.greyOutlineButton}
            onPress={() => navigation.navigate("editProfile")}
          >
            <Text style={buttonStyles.greyOutlineButtonText}>EDIT Profile</Text>
          </TouchableOpacity>
        ) : (
          renderFollowButton()
        )}
      </View>
    </View>
  );
}
