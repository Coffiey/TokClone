import { View, Text } from "react-native";
import { useRef, forwardRef, useImperativeHandle, useEffect } from "react";
import styles from "./styles";
import { ResizeMode, Video } from "expo-av";
import { useUser } from "../../../hooks/useUser";

export const PostSingle = forwardRef(({ item }, parentRef) => {
  const ref = useRef(null);
  const user = useUser(item.creator);
  // console.log(user);
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
      console.log("play button exicuted");
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
      console.log("stop button exicuted");
    } catch (e) {
      console.error(e);
    }
  };

  const unload = async () => {
    console.log("unload");
    if (ref.current == null) return;
    try {
      await ref.current.unloadAsync();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Video
      ref={ref}
      style={styles.Video}
      resizeMode={ResizeMode.COVER}
      isLooping
      //need to change
      isMuted
      usePoster={{
        uri: item.media[1],
      }}
      posterStyle={{ resizeMode: "cover", height: "100%" }}
      shouldPlay={true}
      source={{
        uri: item.media[0],
      }}
    />
  );
});

export default PostSingle;
