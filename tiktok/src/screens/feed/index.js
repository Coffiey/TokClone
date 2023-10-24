import { View, Text, FlatList, Dimensions, ScrollView } from "react-native";
import { useRef, useEffect, useState } from "react";
import styles from "./styles";
import PostSingle from "../../components/general/posts";
import { getFeed } from "../../services/post";

export default function FeedScreen() {
  const [post, setPosts] = useState([]);
  useEffect(() => {
    getFeed().then(setPosts);
  }, []);

  const mediaRefs = useRef([]);

  const onViewableItemsChanged = useRef((changed) => {
    console.log(changed.changed);
    changed.changed.forEach((element) => {
      const cell = mediaRefs.current[element.key];
      if (cell) {
        if (element.isViewable) {
          cell.play();
        } else {
          cell.stop();
        }
      }
    });
  });

  let onScrollEnd = (e) => {
    console.log("😎", e);
    let pageNumber = Math.min(
      Math.max(
        Math.floor(e.nativeEvent.contentOffset.x / dimensions_width + 0.5) + 1,
        0
      ),
      listItems.length
    );
  };
  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          // flex: 1,
          height: Dimensions.get("window").height - 80,
        }}
      >
        <PostSingle
          item={item}
          ref={(PostSingleRef) => {
            mediaRefs.current[item.id] = PostSingleRef;
          }}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        // pagingEnabled
        onMomentumScrollEnd={onScrollEnd}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 90,
        }}
        renderItem={renderItem}
        windowSize={1}
        maxToRenderPerBatch={2}
        data={post}
        keyExtractor={(item) => item.id}
        onViewableItemsChanged={onViewableItemsChanged.current}
      />
    </View>
  );
}
