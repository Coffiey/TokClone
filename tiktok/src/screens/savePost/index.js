import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import styles from "./styles";
import flags from "../../../flags.json";
import { StackActions, useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/actions";
import { ActivityIndicator } from "react-native-paper";
import NavBarGeneral from "../../components/general/navBar";
import { PanGestureHandler, ScrollView } from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import {
  BUTTON_WIDTH,
  BUTTON_HEIGHT,
  BUTTON_PADDING,
  SWIPABLE_DIMENSIONS,
  H_WAVE_RANGE,
  H_SWIPE_RANGE,
} from "./const";

export default function SavePostScreen(props) {
  const navigation = useNavigation();
  const [description, setDescription] = useState("");
  const [requestRunning, setRequestRunning] = useState(false);
  const [phoneChecked, setPhoneChecked] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const x = useSharedValue(0);

  useEffect(() => {
    if (requestRunning) {
      // handleSavePost();
    }
  }, [requestRunning]);

  const animatedGestureHandler = useAnimatedGestureHandler({
    onActive: (e) => {
      x.value = e.translationX;
    },
    onEnd: () => {
      if (x.value < BUTTON_WIDTH / 2 - SWIPABLE_DIMENSIONS / 2) {
        x.value = withSpring(0);
      } else {
        x.value = withSpring(H_SWIPE_RANGE);
        runOnJS(setRequestRunning)(true);
      }
    },
  });

  const interpolateXInputOpacity = [0, (H_SWIPE_RANGE * 2) / 3];
  const interpolateXFinalOpacity = [-10, 0];
  const interpolateXInput = [0, H_SWIPE_RANGE];

  const AnimatedStyles = {
    swipeable: useAnimatedStyle(() => {
      return {
        transform: [{ translateX: x.value }],
        backgroundColor: interpolateColor(x.value, interpolateXInput, [
          "rgba(255, 255, 255, 0.5)",
          "rgba(144, 228, 193, 1)",
        ]),
      };
    }),
    swipeText: useAnimatedStyle(() => {
      return {
        opacity: interpolate(
          x.value,
          interpolateXInputOpacity,
          [1, 0],
          Extrapolate.CLAMP
        ),
        transform: [
          {
            translateX: interpolate(
              x.value,
              interpolateXInput,
              [0, 0],
              Extrapolate.CLAMP
            ),
          },
        ],
      };
    }),
    swipeAfterText: useAnimatedStyle(() => {
      return {
        opacity: interpolate(
          x.value,
          interpolateXFinalOpacity,
          [0, 1],
          Extrapolate.CLAMP
        ),
        transform: [
          {
            translateX: interpolate(
              x.value,
              interpolateXInput,
              [0, BUTTON_WIDTH / 2 - SWIPABLE_DIMENSIONS],
              Extrapolate.CLAMP
            ),
          },
        ],
      };
    }),
    colorWave: useAnimatedStyle(() => {
      return {
        width: H_WAVE_RANGE + x.value,
        opacity: interpolate(x.value, interpolateXInput, [0, 1]),
      };
    }),
  };

  const dispatch = useDispatch();
  const handleSavePost = () => {
    dispatch(
      createPost(
        description,
        props.route.params.source,
        props.route.params.sourceThumb
      )
    )
      .then(() => {
        navigation.dispatch(StackActions.popToTop());
      })
      .catch((err) => setRequestRunning(false));
  };

  return (
    <ScrollView style={styles.container}>
      <NavBarGeneral title='Create Post' />
      <View style={styles.outerContainer}>
        <Text style={styles.greyTitle}>INFORMATION</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.inputText}
            multiline
            maxLength={150}
            placeholder='Description...'
            textAlignVertical='top'
            onChangeText={(text) => setDescription(text)}
          />
          <Image
            style={styles.mediaPreview}
            source={{ uri: props.route.params.source }}
          />
        </View>
      </View>

      <View style={styles.outerContainer}>
        <Text style={styles.greyTitle}>Price</Text>
        <View style={styles.formContainer}>
          <Text style={styles.prefixText}>JPY ¥</Text>
          <TextInput
            style={styles.inputNumber}
            multiline
            maxLength={15}
            placeholder='0000'
            keyboardType='numeric'
            onChangeText={(text) => setDescription(text)}
          />
        </View>
      </View>

      <View style={styles.outerContainer}>
        <Text style={styles.greyTitle}>Phone</Text>
        <View style={styles.formContainer}>
          <Text style={styles.prefixText}>{flags.JP.emoji}</Text>
          <Text style={styles.prefixText}>+81</Text>
          <TextInput
            style={styles.inputNumber}
            multiline
            maxLength={15}
            placeholder='80-1234-5678'
            keyboardType='numeric'
            onChangeText={(text) => setDescription(text)}
          />
          <TouchableOpacity onPress={() => setPhoneChecked(!phoneChecked)}>
            {phoneChecked ? (
              <AntDesign
                name='checkcircle'
                size={24}
                color='rgba(144, 228, 193, 1)'
              />
            ) : (
              <MaterialIcons
                name='radio-button-unchecked'
                size={26}
                color='black'
              />
            )}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.outerContainer}>
        <Text style={styles.greyTitle}>PIN SOMETHING (OPTIONAL)</Text>
        <View style={styles.formContainer}>
          <Feather
            style={styles.prefixText}
            name='link'
            size={24}
            color='black'
          />
          <TextInput
            style={styles.inputNumber}
            multiline
            maxLength={15}
            placeholder='Add a link to a website'
            keyboardType='numeric'
            onChangeText={(text) => setDescription(text)}
          />
          <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
            {isChecked ? (
              <AntDesign
                name='checkcircle'
                size={24}
                color='#90e4c1'
              />
            ) : (
              <MaterialIcons
                name='radio-button-unchecked'
                size={26}
                color='black'
              />
            )}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.SwipeContainer}>
        <Animated.View style={[styles.colorWave, AnimatedStyles.colorWave]}>
          <Animated.Text
            style={[styles.swipeAfterText, AnimatedStyles.swipeAfterText]}
          >
            Now Posting!
          </Animated.Text>
        </Animated.View>
        <PanGestureHandler onGestureEvent={animatedGestureHandler}>
          <Animated.View style={[styles.swipeable, AnimatedStyles.swipeable]}>
            {requestRunning ? (
              <ActivityIndicator
                color='rgba(255, 255, 255, 0.5)'
                size={32}
              />
            ) : (
              <AntDesign
                name='doubleright'
                size={28}
                color='rgba(144, 228, 193, 1)'
              />
            )}
          </Animated.View>
        </PanGestureHandler>
        <Animated.Text style={[styles.swipeText, AnimatedStyles.swipeText]}>
          Please add a discription
        </Animated.Text>
      </View>
    </ScrollView>
  );
}
