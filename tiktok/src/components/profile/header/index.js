import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { Avatar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { buttonStyles } from "../../../styles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { useFollowing } from "../../../hooks/useFollowing";
import { useFollowingMutation } from "../../../hooks/useFollowingMutation";
import { logout } from "../../../redux/actions";

export default function ProfileHeader({ user }) {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isFollowing = useFollowing(auth.currentUser.uid, user.uid).data;
  const isFollowingMutation = useFollowingMutation();
  const backgroundBlank = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const handleLogOut = () => {
    dispatch(logout());
  };

  const renderFollowButton = () => {
    if (isFollowing) {
      return (
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <TouchableOpacity
            style={buttonStyles.greyOutlineButton}
            onPress={() =>
              navigation.navigate("chatSingle", { contactId: user.uid })
            }
          >
            <Text style={buttonStyles.greyOutlineButtonText}>Message</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={buttonStyles.unfollowButton}
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
        </View>
      );
    } else {
      return (
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity
            style={buttonStyles.filledButton}
            onPress={() =>
              isFollowingMutation.mutate({ otherUserId: user.uid, isFollowing })
            }
          >
            <Text style={buttonStyles.filledButtonText}>Follow</Text>
          </TouchableOpacity>
        </View>
      );
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={handleLogOut}
      >
        <MaterialIcons
          name='logout'
          size={24}
          color='black'
        />
      </TouchableOpacity>
      <View style={styles.bannerContainer}>
        {backgroundBlank.map((_, index) => {
          return (
            <View
              style={[
                styles.backgroundBLank,
                { backgroundColor: index % 2 ? "white" : "#90e4c1" },
              ]}
            ></View>
          );
        })}
      </View>
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
        <Text style={styles.dispalyName}>{user.displayName}</Text>
        <View style={styles.infoSubContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.emailText}>{user.email}</Text>
          </View>
          <View style={styles.counterContianer}>
            <View style={styles.counterItemContainer}>
              <Text style={styles.counterNumberText}>0</Text>
              <Text style={styles.counterLabelText}>Following</Text>
            </View>
            <View style={styles.counterItemContainer}>
              <Text style={styles.counterNumberText}>2</Text>
              <Text style={styles.counterLabelText}>Followers</Text>
            </View>
          </View>
        </View>
        {auth.currentUser.uid === user.uid ? (
          <View style={styles.editButtonContainer}>
            <TouchableOpacity
              style={buttonStyles.greyOutlineButton}
              onPress={() => navigation.navigate("editProfile")}
            >
              <Text style={buttonStyles.greyOutlineButtonText}>Edit Page</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.setting}
              onPress={() => navigation.navigate("editProfile")}
            >
              <Ionicons
                name='settings-sharp'
                size={24}
                color='black'
              />
            </TouchableOpacity>
          </View>
        ) : (
          renderFollowButton()
        )}
      </View>
    </View>
  );
}
