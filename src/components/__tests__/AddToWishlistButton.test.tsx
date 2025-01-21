import React from "react";

import { fireEvent, render } from "@testing-library/react-native";

import { WishlistContext } from "../../context/WishlistContext";

import AddToWishlistButton from "../AddToWishlistButton";

import { ThemeProvider } from "styled-components/native";

const mockTheme = {
  margins: { none: "0" },
  colors: { blue: "#0000FF", white: "#FFFFFF" },
  borderRadius: { medium: "8" },
  fontSizes: { medium: "14" },
  fonts: { bold: "bold" },
};

const mockWishlist = [{ id: 1, title: "Film 1", poster_path: "/path/to/poster", overview: "" }];

const customRender = (ui: React.ReactElement) => {
  return render(
    <ThemeProvider theme={mockTheme}>
      <WishlistContext.Provider value={{ wishlist: mockWishlist, addToWishlist: jest.fn(), removeFromWishlist: jest.fn() }}>
        {ui}
      </WishlistContext.Provider>
    </ThemeProvider>
  );
};

describe("AddToWishlistButton", () => {
  it("Should displays 'Remove from Wishlist' WHEN the film is already in the wishlist", () => {
    const { getByText } = customRender(<AddToWishlistButton filmId={1} filmTitle="Film 1" filmPosterPath="/path/to/poster" />);
    expect(getByText("Remove from Wishlist")).toBeTruthy();
  });

  it("Should displays 'Add to Wishlist' WHEN the film is not in the wishlist", () => {
    const { getByText } = customRender(<AddToWishlistButton filmId={2} filmTitle="Film 2" filmPosterPath="/path/to/poster" />);
    expect(getByText("Add to Wishlist")).toBeTruthy();
  });

  it("Should calls addToWishlist WHEN the film is not in the wishlist", () => {
    const addToWishlistMock = jest.fn();
    const { getByText } = render(
      <ThemeProvider theme={mockTheme}>
        <WishlistContext.Provider value={{ wishlist: [], addToWishlist: addToWishlistMock, removeFromWishlist: jest.fn() }}>
          <AddToWishlistButton filmId={2} filmTitle="Film 2" filmPosterPath="/path/to/poster" />
        </WishlistContext.Provider>
      </ThemeProvider>
    );

    fireEvent.press(getByText("Add to Wishlist"));
    expect(addToWishlistMock).toHaveBeenCalledWith({
      id: 2,
      title: "Film 2",
      poster_path: "/path/to/poster",
      overview: "",
    });
  });

  it("Should calls removeFromWishlist when the film is already in the wishlist", () => {
    const removeFromWishlistMock = jest.fn();
    const { getByText } = render(
      <ThemeProvider theme={mockTheme}>
        <WishlistContext.Provider value={{ wishlist: mockWishlist, addToWishlist: jest.fn(), removeFromWishlist: removeFromWishlistMock }}>
          <AddToWishlistButton filmId={1} filmTitle="Film 1" filmPosterPath="/path/to/poster" />
        </WishlistContext.Provider>
      </ThemeProvider>
    );
    fireEvent.press(getByText("Remove from Wishlist"));
    expect(removeFromWishlistMock).toHaveBeenCalledWith(1);
  });
});
