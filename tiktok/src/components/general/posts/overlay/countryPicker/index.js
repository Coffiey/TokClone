import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState, useMemo } from "react";
import countryList from "react-select-country-list";
import styles from "./styles";

const CountryPicker = ({ handleDisplayCountries }) => {
  const [value, setValue] = useState("");
  console.log(value);
  const options = useMemo(() => countryList().getLabels(), []);

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={handleDisplayCountries}
    >
      <View style={styles.scrollContainer}>
        <View>
          <TextInput
            placeholder='Search...'
            value={value}
            onChangeText={setValue}
          />
        </View>
        <ScrollView>
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
