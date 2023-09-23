import { View, Text } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Feather } from "@expo/vector-icons";
import CameraScreen from "../../screens/camera";

export default function HomeScreen() {
  const Tab = createMaterialBottomTabNavigator();

  const Empty = () => {
    return <View></View>;
  };
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: "black" }}
      initialRouteName='feed'
    >
      <Tab.Screen
        name='feed'
        component={Empty}
        options={{
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
        component={Empty}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather
              name='search'
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name='camera'
        component={CameraScreen}
        options={{
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
        component={Empty}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather
              name='user'
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
