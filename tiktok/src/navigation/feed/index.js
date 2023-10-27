import { View, Text } from "react-native";
import React, { useState, createContext } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import FeedScreen from "../../screens/feed";
import ProfileScreen from "../../screens/profile";

const { Screen, Navigator } = createMaterialTopTabNavigator();
export const CurrentUserProfileItemInViewContext = createContext(null);

const FeedNavigation = () => {
  const [currentUserProfileItemView, setCurrentUserProfileItemView] =
    useState(null);
  return (
    <CurrentUserProfileItemInViewContext.Provider
      value={currentUserProfileItemView}
    >
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
    </CurrentUserProfileItemInViewContext.Provider>
  );
};

export default FeedNavigation;
