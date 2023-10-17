import { View, Text } from "react-native";
import { useRef, forwardRef, useImperativeHandle, useEffect } from "react";
import styles from "./styles";
import { ResizeMode, Video } from "expo-av";

export const PostSingle = forwardRef((props, parentRef) => {
  const ref = useRef(null);
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
    console.log("play");
    if (ref.current == null) return;
    const status = await ref.current.getStatusAsync();
    if (status?.isplaying) return;
    try {
      await ref.current.playAsync();
    } catch (e) {
      console.error(e);
    }
  };

  const stop = async () => {
    console.log("stop");
    if (ref.current == null) return;
    const status = await ref.current.getStatusAsync();
    if (!status?.isplaying) return;
    try {
      await ref.current.stopAsync();
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
      shouldPlay={true}
      source={{
        uri: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4",
      }}
    />
  );
});

export default PostSingle;
