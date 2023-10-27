import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import FeedScreen from "../../screens/feed";
import ProfileScreen from "../../screens/profile";

const { Screen, Navigator } = createMaterialTopTabNavigator();

const FeedNavigation = () => {
  return (
    <Navigator
      initialRouteName='feedList'
      tabBar={() => {
        <></>;
      }}
    >
      <Screen
        name='feedList'
        component={FeedScreen}
      />
      <Screen
        name='feedList'
        component={ProfileScreen}
      />
    </Navigator>
  );
};

export default FeedNavigation;
