import React from "react";
import { View, Text, StyleSheet } from "react-native";
import color from "../constants/Color";

const NumberContainer = (props) => {
  return (
    <View styles={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: color.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: color.accent,
    fontSize: 22,
  },
});

export default NumberContainer;
