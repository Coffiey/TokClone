import { View, Text } from "react-native";
import { useRef, forwardRef, useImperativeHandle, useEffect } from "react";
import styles from "./styles";
import { ResizeMode, Video } from "expo-av";
import { useUser } from "../../../hooks/useUser";
import PostSingleOverlay from "./overlay";

export const PostSingle = forwardRef(({ item }, parentRef) => {
  const ref = useRef(null);
  const user = useUser(item.creator).data;
  console.log(user);
  useImperativeHandle(parentRef, () => ({
    play,
    unload,
    stop,
  }));

  useEffect(() => {
    return () => {
      unload();
    };
  }, []);

  const play = async () => {
    if (ref.current == null) return;
    const status = await ref.current.getStatusAsync();
    if (status?.isPlaying) return;
    try {
      await ref.current.playAsync();
    } catch (e) {
      console.error(e);
    }
  };

  const stop = async () => {
    if (ref.current == null) return;
    const status = await ref.current.getStatusAsync();
    if (!status?.isPlaying) return;
    try {
      await ref.current.stopAsync();
    } catch (e) {
      console.error(e);
    }
  };

  const unload = async () => {
    if (ref.current == null) return;
    try {
      await ref.current.unloadAsync();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <PostSingleOverlay
        user={user}
        post={item}
      />

      <Video
        ref={ref}
        style={styles.Video}
        resizeMode={ResizeMode.COVER}
        isLooping
        usePoster={{
          uri: item.media[1],
        }}
        posterStyle={{ resizeMode: "cover", height: "100%" }}
        shouldPlay={true}
        source={{
          uri: item.media[0],
        }}
      />
    </>
  );
});

export default PostSingle;
