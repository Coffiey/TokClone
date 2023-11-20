import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useMemo } from "react";
import countryList from "react-select-country-list";
import styles from "./styles";

const CountryPicker = ({ handleDisplayCountries }) => {
  const options = useMemo(() => countryList().getLabels(), []);
  //   console.log(options);
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={handleDisplayCountries}
    >
      <View style={styles.scrollContainer}>
        {options &&
          options.map((country) => {
            return (
              <TouchableOpacity style={styles.countryButton}>
                <Text style={styles.countryButtonText}>{country}</Text>
              </TouchableOpacity>
            );
          })}
      </View>
    </TouchableOpacity>
  );
};

export default CountryPicker;
