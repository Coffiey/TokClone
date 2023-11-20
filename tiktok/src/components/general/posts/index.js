import { View, Text } from "react-native";
import {
  useRef,
  forwardRef,
  useImperativeHandle,
  useEffect,
  useState,
} from "react";
import styles from "./styles";
import { ResizeMode, Video } from "expo-av";
import { useUser } from "../../../hooks/useUser";
import PostSingleOverlay from "./overlay";

export const PostSingle = forwardRef(
  ({ item, setCountrySwitch }, parentRef) => {
    const [mute, setMute] = useState(false);
    const ref = useRef(null);
    const user = useUser(item.creator).data;
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
          setCountrySwitch={setCountrySwitch}
          user={user}
          post={item}
          setMute={setMute}
          mute={mute}
        />

        <Video
          ref={ref}
          style={styles.Video}
          resizeMode={ResizeMode.COVER}
          isLooping
          isMuted={mute}
          // usePoster={{
          //   uri: item.media[1],
          // }}
          posterStyle={{ resizeMode: "cover", height: "100%" }}
          shouldPlay={mute}
          source={{
            // uri: item.media[0],
            uri: null,
          }}
        />
      </>
    );
  }
);

export default PostSingle;
