import { View, Text, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import styles from "./styles";
import { useSelector } from "react-redux";
import ProfileNavBar from "../../components/profile/navBar";
import ProfileHeader from "../../components/profile/header";
import ProfilePostList from "../../components/profile/postList";
import { SafeAreaView } from "react-native-safe-area-context";
import { CurrentUserProfileItemInViewContext } from "../../navigation/feed";
import { useUser } from "../../hooks/useUser";
import { getPostsByUserId } from "../../services/post";

export default function ProfileScreen({ route }) {
  const { initialUserId } = route.params;

  const [userPosts, setUserPosts] = useState([]);
  let providerUserId = null;
  if (CurrentUserProfileItemInViewContext) {
    providerUserId = useContext(CurrentUserProfileItemInViewContext);
  }

  user = useUser(initialUserId ? initialUserId : providerUserId).data;

  useEffect(() => {
    if (user) {
      console.log("from profile");
      getPostsByUserId(user.uid).then(setUserPosts);
    }
  }, [user]);
  return (
    <SafeAreaView style={styles.container}>
      {user && (
        <>
          <ProfileHeader user={user} />
          <ProfilePostList posts={userPosts} />
        </>
      )}
    </SafeAreaView>
  );
}
