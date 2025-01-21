import React from "react";

import { render } from "@testing-library/react-native";

import AdditionalInfo from "../AdditionalInfo";

import { ThemeProvider } from "styled-components/native";

const mockTheme = {
  margins: {
    extraLarge: "20px",
  },
  spacing: {
    medium: "10px",
    small: "5px",
  },
  colors: {
    gray: "#ccc",
  },
  fontSizes: {
    large: "18px",
    medium: "14px",
  },
};

describe("AdditionalInfo", () => {
  it("Should renders correctly with all props", () => {
    const { getByText } = render(
      <ThemeProvider theme={mockTheme}>
        <AdditionalInfo releaseDate="2025-01-01" rating={8} genres={["Action", "Adventure"]} />
      </ThemeProvider>
    );
    expect(getByText("Additional Information")).toBeTruthy();
    expect(getByText("Release Date: 2025-01-01")).toBeTruthy();
    expect(getByText("Rating: 8 / 10")).toBeTruthy();
    expect(getByText("Genres: Action, Adventure")).toBeTruthy();
  });

  it("Should handles empty genres correctly", () => {
    const { getByText } = render(
      <ThemeProvider theme={mockTheme}>
        <AdditionalInfo releaseDate="2025-01-01" rating={8} genres={[]} />
      </ThemeProvider>
    );
    expect(getByText("Genres:")).toBeTruthy();
  });
});
