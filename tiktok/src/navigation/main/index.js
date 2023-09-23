import { View, Text } from "react-native";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAuthStateListner } from "../../redux/actions";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthScreen from "../../screens/auth";
import HomeScreen from "../home";

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
        {/* {currentUserObj.currentUser ? ( */}
        <Stack.Screen
          name='auth'
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        {/* ) : (
          <Stack.Screen
            name='auth'
            component={AuthScreen}
            options={{ headerShown: false }}
          />
        )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
