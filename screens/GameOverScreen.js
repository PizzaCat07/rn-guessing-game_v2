import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Color from "../constants/Color";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/success.jpg")}
          /* source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR450C5NHbQkHHUPxp9e7p5GlDOJeHwBFnaVkLDVSfHLE9eli-h2eEOP8qBZzmVIG29Yns&usqp=CAU",
          }} */
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          your phone needed{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highlight}>{props.roundsNumber}</Text>
        </BodyText>
      </View>

      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    width: 300,
    height: 300,
    overflow: "hidden",
  },
  highlight: {
    color: Color.primary,
    fontFamily: "open-sans-bold",
  },
  resultContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  resultText: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default GameOverScreen;
