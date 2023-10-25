import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect, useMemo } from "react";
import styles from "./styles";
import { getLikeById, updateLike } from "../../../../services/post";
import { useDispatch, useSelector } from "react-redux";
import { throttle } from "throttle-debounce";
import { openCommentModel } from "../../../../redux/actions/model";

export default function PostSingleOverlay({ user, post }) {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();

  const [currentLikeState, setCurrentLikeState] = useState({
    state: false,
    counter: post.likesCount,
  });

  useEffect(() => {
    getLikeById(post.id, currentUser.uid).then((res) => {
      setCurrentLikeState({
        ...currentLikeState,
        state: res,
      });
    });
  }, []);

  const handleUpdateLike = useMemo(
    () =>
      throttle(2000, (currentLikeStateInst) => {
        setCurrentLikeState({
          state: !currentLikeStateInst.state,
          counter:
            currentLikeStateInst.counter +
            (currentLikeStateInst.state ? -1 : 1),
        });
        updateLike(post.id, currentUser.uid, currentLikeStateInst.state);
      }),
    []
  );

  return (
    <View style={styles.container}>
      {user && (
        <>
          <View style={styles.bottomContainer}>
            <Image
              source={{ uri: user.photoURL }}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.displayName}>{user.displayName}</Text>
              <Text style={styles.description}>{post.description}</Text>
            </View>
          </View>
          <View style={styles.leftContainer}>
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

            <TouchableOpacity
              style={styles.action}
              onPress={() => dispatch(openCommentModel(true, post))}
            >
              <Ionicons
                color={"white"}
                size={40}
                name='chatbubble-outline'
              />
              <Text style={styles.actionButtonText}>
                {currentLikeState.counter}
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}
