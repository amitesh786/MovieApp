import React, { useEffect } from "react";
import { Animated, ImageBackground } from "react-native";

import { SCREEN_HOME } from "../utils/constants";

import styled from "styled-components/native";

import { SplashScreenProps } from "./types";

const backgroundImage = require("../assets/images/movie_app_logo.png");

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      navigation.replace(SCREEN_HOME);
    }, 5000);
  }, [fadeAnim, navigation]);

  return (
    <ImageBackgroundStyled source={backgroundImage} style={{ flex: 1 }}>
      <Animated.View style={{ flex: 1, justifyContent: "center", alignItems: "center", opacity: fadeAnim }}>
        <TextStyledTop>MovieApp</TextStyledTop>
        <TextStyled>Movies at your fingertips</TextStyled>
        <TextStyled>Just swipe to explore!</TextStyled>
      </Animated.View>
    </ImageBackgroundStyled>
  );
};

const ImageBackgroundStyled = styled(ImageBackground)`
  flex: 1;
  justify-content: center;
  align-items: center;
  resize-mode: cover;
`;

const TextStyled = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.large || 20}px;
  color: ${(props) => props.theme.colors.white};
`;

const TextStyledTop = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.large || 20}px;
  color: ${(props) => props.theme.colors.white};
  position: absolute;
  top: 50px;
  font-weight: bold;
`;

export default SplashScreen;
