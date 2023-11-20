import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState, useMemo, useRef } from "react";
import countryList from "react-select-country-list";
import styles from "./styles";

const CountryPicker = ({ handleDisplayCountries }) => {
  const [value, setValue] = useState("");
  const [currentCountry, setCurrentCountry] = useState(null);
  const options = useMemo(() => countryList().getLabels(), []);
  const scrollViewRef = useRef();
  let userStopTyping;

  const scrollToIndex = (index) => {
    scrollValue = index > 4 ? index * 30 : 0;
    scrollViewRef.current.scrollTo({ y: scrollValue, animated: true });
  };

  const HandleChangeText = (text) => {
    setValue(text);
    clearTimeout(userStopTyping);
    userStopTyping = setTimeout(() => {
      serachIndex = options.findIndex((element) =>
        element.toLowerCase().includes(value.toLowerCase())
      );
      scrollToIndex(serachIndex);
      //   console.log(serachIndex);
    }, 500);
  };
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={handleDisplayCountries}
    >
      <View>
        <View style={styles.subContainer}>
          <TextInput
            placeholder='Search...'
            value={value}
            onChangeText={HandleChangeText}
          />
        </View>
        <ScrollView
          ref={scrollViewRef}
          style={styles.scrollContainer}
        >
          {options &&
            options.map((country) => {
              return (
                <TouchableOpacity style={styles.countryButton}>
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
