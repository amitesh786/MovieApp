import React from "react";
import { Alert } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { AppNavigationProp } from "../types";
import { SCREEN_HOME, SCREEN_WISHLIST } from "../utils/constants";

import styled from "styled-components/native";

import { BottomNavigationProps } from "./types";

const BottomNavigation: React.FC<BottomNavigationProps> = ({ currentScreen }) => {
  const navigation = useNavigation<AppNavigationProp>();

  const navigateToHome = () => {
    if (currentScreen === "Home") {
      Alert.alert("Info", "You are already on the Home screen!");
    } else {
      navigation.navigate(SCREEN_HOME);
    }
  };

  const navigateToWishlist = () => {
    if (currentScreen === "Wishlist") {
      Alert.alert("Info", "You are already on the Wishlist screen!");
    } else {
      navigation.navigate(SCREEN_WISHLIST);
    }
  };

  return (
    <Container>
      <NavButton onPress={navigateToHome} active={currentScreen === "Home"}>
        <ButtonText active={currentScreen === "Home"}>Home</ButtonText>
      </NavButton>

      <NavButton onPress={navigateToWishlist} active={currentScreen === "Wishlist"}>
        <ButtonText active={currentScreen === "Wishlist"}>Wishlist</ButtonText>
      </NavButton>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.colors.whiteSomke};
  padding-vertical: ${(props) => props.theme.paddings.medium}px;
  border-top-width: 1px;
  border-top-color: ${(props) => props.theme.colors.silver};
`;

const NavButton = styled.TouchableOpacity<{ active: boolean }>`
  flex: 1;
  align-items: center;
  padding-vertical: ${(props) => props.theme.paddings.medium}px;
`;

const ButtonText = styled.Text<{ active: boolean }>`
  color: ${(props) => (props.active ? "gray" : "blue")};
  font-size: ${(props) => props.theme.fontSizes.medium || 16}px;
`;

export default BottomNavigation;
