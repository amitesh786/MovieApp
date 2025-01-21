import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import DetailScreen from "../screens/DetailScreen";
import HomeScreen from "../screens/HomeScreen";
import SplashScreen from "../screens/SplashScreen";
import WishlistScreen from "../screens/WishlistScreen";
import { RootStackParamList } from "../types";
import {
  HEADER_TITLE_DETAIL,
  HEADER_TITLE_HOME,
  HEADER_TITLE_WISHLIST,
  SCREEN_DETAILS,
  SCREEN_HOME,
  SCREEN_SPLASH,
  SCREEN_WISHLIST,
} from "../utils/constants";

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={SCREEN_SPLASH} component={SplashScreen} />
        <Stack.Screen name={SCREEN_HOME} component={HomeScreen} options={{ title: HEADER_TITLE_HOME, headerShown: true }} />
        <Stack.Screen name={SCREEN_DETAILS} component={DetailScreen} options={{ title: HEADER_TITLE_DETAIL, headerShown: true }} />
        <Stack.Screen name={SCREEN_WISHLIST} component={WishlistScreen} options={{ title: HEADER_TITLE_WISHLIST, headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
