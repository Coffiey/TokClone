import { View, Text } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import CameraScreen from "../../screens/camera";
import ProfileScreen from "../../screens/profile";
import SearchScreen from "../../screens/search";
import FeedNavigation from "../feed";
import { auth } from "../../../App";

import CustomTabBar from "./customTabBarHook";

export default function HomeScreen() {
  const Tab = createBottomTabNavigator();

  const Empty = () => {
    return <View></View>;
  };
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          paddingTop: 10,
          backgroundColor: "transparent",
          marginBottom: -2,
          marginHorizontal: -5,
          shadowColor: "transparent",
          position: "absolute",
          borderWidth: 0,
          borderColor: "transparent",
          elevation: 5,
        },
      })}
    >
      <Tab.Screen
        name='feed'
        component={FeedNavigation}
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo
              name='home'
              size={24}
              color={focused ? "white" : "#D3D3D3"}
              style={{ padding: 12, borderRadius: 24 }}
              backgroundColor={focused ? "#90e4c1" : "transparent"}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Discover'
        component={SearchScreen}
        options={{
          tabBarLabel: "Discover",
          tabBarIcon: ({ focused }) => {
            return (
              <Feather
                name='search'
                size={24}
                color={focused ? "white" : "#D3D3D3"}
                style={{ padding: 12, borderRadius: 24 }}
                backgroundColor={focused ? "#90e4c1" : "transparent"}
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
          tabBarIcon: ({ focused }) => {
            return (
              <Fontisto
                name='camera'
                size={24}
                color={focused ? "white" : "#D3D3D3"}
                style={{ padding: 12, borderRadius: 24 }}
                backgroundColor={focused ? "#90e4c1" : "transparent"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name='inbox'
        component={Empty}
        options={{
          tabBarLabel: "inbox",
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name='bell'
              size={24}
              color={focused ? "white" : "#D3D3D3"}
              style={{ padding: 12, borderRadius: 24 }}
              backgroundColor={focused ? "#90e4c1" : "transparent"}
            />
          ),
        }}
      />
      <Tab.Screen
        name='me'
        component={ProfileScreen}
        options={{
          tabBarLabel: "feed",
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name='user-alt'
              size={24}
              color={focused ? "white" : "#D3D3D3"}
              style={{ padding: 12, borderRadius: 24 }}
              backgroundColor={focused ? "#90e4c1" : "transparent"}
            />
          ),
        }}
        initialParams={{ initialUserId: auth.currentUser.uid }}
      />
    </Tab.Navigator>
  );
}
