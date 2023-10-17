import { View, Text, FlatList, Dimensions } from "react-native";
import { useRef } from "react";
import styles from "./styles";
import PostSingle from "../../components/posts";

export default function FeedScreen() {
  const array = [1, 2, 3, 4, 5, 6];

  const mediaRefs = useRef([]);
  const onViewableItemsChanged = useRef(({ changed }) => {
    changed.forEach((element) => {
      const cell = mediaRefs.current[element.key];
      if (cell) {
        console.log("OnViewableItemsChanged", element, element.isViewable);
        if (element.isViewable) {
          cell.play;
        } else {
          cell.stop;
        }
      }
    });
  });
  const renderItem = ({ item, index }) => {
    return (
      <View
        style={[
          {
            flex: 1,
            height: Dimensions.get("window").height - 80,
          },
          index % 2 ? { backgroundColor: "blue" } : { backgroundColor: "pink" },
        ]}
      >
        {/* <PostSingle
          ref={(PostSingleRef) => (mediaRefs.current[item] = PostSingleRef)}
        /> */}
        <Text>{item}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        // removeClippedSubviews
        // viewabilityConfig={{ itemVisiblePercentThreshold: 100 }}
        renderItem={renderItem}
        // windowSize={4}
        // initialNumToRender={0}
        // maxToRenderPerBatch={2}
        data={array}
        pagingEnabled
        keyExtractor={(item) => item}
        // onViewableItemsChanged={onViewableItemsChanged.current}
      />
    </View>
  );
}
