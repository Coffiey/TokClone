import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect, useMemo } from "react";
import styles from "./styles";
import { getLikeById, updateLike } from "../../../../services/post";
import { useSelector } from "react-redux";
import { throttle } from "throttle-debounce";

export default function PostSingleOverlay({ user, post }) {
  const currentUser = useSelector((state) => state.auth.currentUser);

  const [currentLikeState, setCurrentLikeState] = useState({
    state: false,
    counter: post.likesCount,
  });

  useEffect(() => {
    getLikeById(post.id, currentUser.uid).the((res) => {
      setCurrentLikeState({
        ...currentLikeState,
        state: res,
      });
    });
  }, []);

  const handleUpdateLike = useMemo(() => {
    throttle(2000, true, (currentLikeStateInst) => {
      setCurrentLikeState({
        state: !currentLikeStateInst.state,
        counter:
          currentLikeStateInst.counter + (currentLikeStateInst.state ? -1 : 1),
      });
      updateLike(post.id, currentUser.id, currentLikeStateInst.state);
    });
  });

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.displayName}>{user.DisplayName}</Text>
        <Text style={styles.description}>{user.description}</Text>
      </View>
      <View style={styles.leftContainer}>
        <Image
          source={{ uri: user.photoURL }}
          style={styles.avatar}
        />
        <TouchableOpacity
          style={styles.action}
          onPress={() => handleUpdateLike(currentLikeState)}
        >
          <Ionicons
            color={currentLikeState.state ? "red" : "white"}
            size={40}
            name={currentLikeState.state ? "heart" : "heart-outline"}
          />
          <Text style={styles.actionButtonText}>
            {currentLikeState.counter}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
