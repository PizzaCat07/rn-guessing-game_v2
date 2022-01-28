import React from "react";
import { View, Text, StyleSheet } from "react-native";

import color from "../constants/Color";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text styles={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: color.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "black",
    fontSize: 18,
  },
});

export default Header;
