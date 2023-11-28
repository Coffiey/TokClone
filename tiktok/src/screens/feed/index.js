import { View, Text, FlatList, Dimensions, ScrollView } from "react-native";
import { useRef, useEffect, useState } from "react";
import styles from "./styles";
import PostSingle from "../../components/general/posts";
import { getFeed, getPostsByUserId } from "../../services/post";

export default function FeedScreen({ route }) {
  const { setCurrentUserProfileItemView, creator, profile } = route.params;
  const [post, setPosts] = useState([]);
  const [countrySwitch, setCountrySwitch] = useState(true);
  useEffect(() => {
    if (profile) {
      // getPostsByUserId(creator).then(setPosts);
      getFeed().then(setPosts);
    } else {
      getFeed().then(setPosts);
    }
  }, []);

  const mediaRefs = useRef([]);

  const onViewableItemsChanged = useRef((changed) => {
    changed.changed.forEach((element) => {
      const cell = mediaRefs.current[element.key];
      if (cell) {
        if (element.isViewable) {
          if (!profile) {
            setCurrentUserProfileItemView(element.item.creator);
          }
          cell.play();
        } else {
          cell.stop();
        }
      }
    });
  });

  const feedItemHeight = Dimensions.get("window").height;
  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          backgroundColor: "black",
          height: feedItemHeight,
        }}
      >
        <PostSingle
          setCountrySwitch={setCountrySwitch}
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
        scrollEnabled={countrySwitch}
        pagingEnabled
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
