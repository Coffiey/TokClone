import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import {
  addComment,
  clearCommentListner,
  commentListner,
} from "../../../services/post";
import CommentItem from "./item";

const CommentModel = ({ post }) => {
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState("");
  const currentUser = useSelector((state) => state.auth.currentUser);

  useEffect(() => {
    commentListner(post.id, setCommentList);
    return () => clearCommentListner();
  }, []);

  const renderItem = ({ item }) => {
    return <CommentItem item={item} />;
  };
  console.log(commentList);
  const handleCommentSend = async () => {
    if (comment.length == 0) return;
    await addComment(post.id, currentUser.uid, comment);
    setComment("");
  };
  return (
    <View style={styles.container}>
      {commentList && (
        <FlatList
          data={commentList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
      <View style={styles.containerInput}>
        <Image
          style={styles.avatar}
          source={{ uri: currentUser.photoURL }}
        />
        <TextInput
          value={comment}
          style={styles.input}
          placeholder='message...'
          onChangeText={setComment}
        />
        <TouchableOpacity onPress={handleCommentSend}>
          <Ionicons
            name='arrow-up-circle'
            size={34}
            color='crimson'
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CommentModel;
