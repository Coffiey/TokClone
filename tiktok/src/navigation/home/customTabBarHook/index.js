// import React, { Component } from "react";
// import { View, Text, TouchableOpacity } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";

// const FocusedGradient = ["#4c669f", "#3b5998", "#192f6a"];
// const NotFocusedGradient = ["#ffffff", "#ffffff"];

// function CustomTabBar(props) {
//   const { state, descriptors, navigation } = props;
//   console.log(descriptors[0]);
//   const focusedOptions = descriptors[state.routes[state.index].key].options;

//   if (focusedOptions.tabBarVisible === false) {
//     return null;
//   }

//   return (
//     <View style={{ flexDirection: "row" }}>
//       {state.routes.map((route, index) => {
//         const { options } = descriptors[route.key];
//         const icon = options.tabBarIcon;
//         const label =
//           options.tabBarLabel !== undefined
//             ? options.tabBarLabel
//             : options.title !== undefined
//             ? options.title
//             : route.name;

//         const isFocused = state.index === index;

//         const onPress = () => {
//           const event = navigation.emit({
//             type: "tabPress",
//             target: route.key,
//             canPreventDefault: true,
//           });

//           if (!isFocused && !event.defaultPrevented) {
//             navigation.navigate(route.name);
//           }
//         };

//         const onLongPress = () => {
//           navigation.emit({
//             type: "tabLongPress",
//             target: route.key,
//           });
//         };

//         return (
//           <LinearGradient
//             colors={isFocused ? FocusedGradient : NotFocusedGradient}
//             style={{
//               flex: 1,
//               backgroundColor: isFocused ? "dodgerblue" : "white",
//             }}
//           >
//             <TouchableOpacity
//               accessibilityRole='button'
//               accessibilityState={isFocused ? { selected: true } : {}}
//               accessibilityLabel={options.tabBarAccessibilityLabel}
//               testID={options.tabBarTestID}
//               onPress={onPress}
//               onLongPress={onLongPress}
//               style={{
//                 minHeight: 50,
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               {icon()}
//               <Text style={{ color: isFocused ? "white" : "#222" }}>
//                 {label}
//               </Text>
//             </TouchableOpacity>
//           </LinearGradient>
//         );
//       })}
//     </View>
//   );
// }

// export default CustomTabBar;
