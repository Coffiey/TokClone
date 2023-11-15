import { View, Text } from "react-native";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAuthStateListner } from "../../redux/actions";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SavePostScreen from "../../screens/savePost";
import AuthScreen from "../../screens/auth";
import HomeScreen from "../home";
import EditPorfileScreen from "../../screens/profile/edit";
import EditProfileFieldScreen from "../../screens/profile/edit/field";
import Model from "../../components/model";
import ProfileScreen from "../../screens/profile";
import FeedScreen from "../../screens/feed";
import ChatSingleScreen from "../../screens/chat/single";

export default function Route() {
  const Stack = createNativeStackNavigator();
  const currentUserObj = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userAuthStateListner());
  }, []);

  if (!currentUserObj.loaded) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {currentUserObj.currentUser ? (
          <>
            <Stack.Screen
              name='home'
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='SavePost'
              component={SavePostScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='userPosts'
              component={FeedScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='profileOther'
              component={ProfileScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='editProfile'
              component={EditPorfileScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='editProfileField'
              component={EditProfileFieldScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='chatSingle'
              component={ChatSingleScreen}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <Stack.Screen
            name='auth'
            component={AuthScreen}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
      <Model />
    </NavigationContainer>
  );
}
