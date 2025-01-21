import React from "react";

import { WishlistProvider } from "./context/WishlistContext";

import { ThemeProvider } from "styled-components/native";

import RootNavigator from "./navigation/RootNavigator";
import { theme } from "./theme/customTheme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <WishlistProvider>
        <RootNavigator />
      </WishlistProvider>
    </ThemeProvider>
  );
};

export default App;
