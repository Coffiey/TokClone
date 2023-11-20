import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState, useMemo, useRef } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import styles from "./styles";

const CountryPicker = ({ handleDisplayCountries, options }) => {
  const [value, setValue] = useState("");
  const [currentCountry, setCurrentCountry] = useState(null);
  const scrollViewRef = useRef();

  const scrollToIndex = (index) => {
    scrollValue = index > 4 ? index * 30 : 0;
    scrollViewRef.current.scrollTo({ y: scrollValue, animated: true });
  };

  const handleScroll = (event) => {
    let x = 0;
    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
    offset = contentOffset.y;
    const isReachingEnd =
      contentOffset.y >= contentSize.height - layoutMeasurement.height;
    if (isReachingEnd) {
      scrollViewRef.current.scrollTo({ y: 210, animated: false });
    }
    if (contentOffset.y === 0) {
      scrollViewRef.current.scrollTo({ y: 7470, animated: false });
    }
  };

  const HandleChangeText = (text) => {
    setValue(text);
    serachIndex = options.findIndex((element) =>
      element.toLowerCase().includes(text.toLowerCase())
    );
    scrollToIndex(serachIndex);
  };
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={handleDisplayCountries}
    >
      <View>
        {currentCountry && (
          <View style={styles.locationContainer}>
            <FontAwesome
              name='map-marker'
              size={24}
              color='black'
            />
            <Text>{currentCountry}</Text>
            <TouchableOpacity onPress={() => setCurrentCountry(null)}>
              <Entypo
                name='cross'
                size={24}
                color='black'
              />
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.inputContainer}>
          <TextInput
            placeholder='Search...'
            value={value}
            onChangeText={HandleChangeText}
          />
          {currentCountry && <Text>hello</Text>}
        </View>
        <ScrollView
          ref={scrollViewRef}
          style={styles.scrollContainer}
          contentOffset={{ y: 210 }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={8}
          onScroll={handleScroll}
        >
          {options &&
            options.map((country) => {
              return (
                <TouchableOpacity
                  style={styles.countryButton}
                  onPress={() => {
                    setCurrentCountry(country);
                  }}
                >
                  <Text style={styles.countryButtonText}>{country}</Text>
                </TouchableOpacity>
              );
            })}
        </ScrollView>
      </View>
    </TouchableOpacity>
  );
};

export default CountryPicker;
