import { View, Text } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Feather } from "@expo/vector-icons";
import CameraScreen from "../../screens/camera";
import ProfileScreen from "../../screens/profile";
import SearchScreen from "../../screens/search";
import FeedNavigation from "../feed";
import { auth } from "../../../App";

// import CustomTabBar from "./customTabBarHook";

export default function HomeScreen() {
  const Tab = createMaterialBottomTabNavigator();

  const Empty = () => {
    return <View></View>;
  };
  return (
    <Tab.Navigator
      // detachInactiveScreens
      labeled={false}
      shifting={false}
      inactiveColor='lightgreen'
      activeColor='white'
      barStyle={{
        backgroundColor: "transparent",
        height: 80,
        marginTop: -80,
      }}
    >
      <Tab.Screen
        name='feed'
        component={FeedNavigation}
        options={{
          tabBarLabel: "feed",
          tabBarIcon: ({ color }) => (
            <Feather
              name='home'
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Discover'
        component={SearchScreen}
        options={{
          tabBarLabel: "Discover",
          tabBarIcon: (props) => {
            return (
              <Feather
                name='search'
                size={24}
                color={props.color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name='camera'
        component={CameraScreen}
        options={{
          tabBarLabel: "camera",
          tabBarIcon: ({ color }) => (
            <Feather
              name='plus-square'
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name='inbox'
        component={Empty}
        options={{
          tabBarLabel: "inbox",
          tabBarIcon: ({ color }) => (
            <Feather
              name='message-square'
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name='me'
        component={ProfileScreen}
        options={{
          tabBarLabel: "feed",
          tabBarIcon: ({ color }) => (
            <Feather
              name='user'
              size={24}
              color={color}
            />
          ),
        }}
        initialParams={{ initialUserId: auth.currentUser.uid }}
      />
    </Tab.Navigator>
  );
}
