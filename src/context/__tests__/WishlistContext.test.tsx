import React from "react";
import { Button, Text } from "react-native";

import { fireEvent, render } from "@testing-library/react-native";

import { BUTTON_WISHLIST_ADD_TEXT, BUTTON_WISHLIST_REMOVE_TEXT } from "../../utils/constants";
import { WishlistProvider, useWishlist } from "../WishlistContext";
import { IFilms } from "../types";

const mockFilm: IFilms = {
  id: 1,
  title: "Film 1",
  poster_path: "/path/to/poster",
  overview: "",
};

const TestComponent: React.FC = () => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  return (
    <>
      <Button title={BUTTON_WISHLIST_ADD_TEXT} onPress={() => addToWishlist(mockFilm)} />
      <Button title={BUTTON_WISHLIST_REMOVE_TEXT} onPress={() => removeFromWishlist(mockFilm.id)} />
      <Text>{wishlist.length}</Text>
    </>
  );
};

describe("WishlistContext", () => {
  it("Should add a film to the wishlist", async () => {
    const { getByText } = render(
      <WishlistProvider>
        <TestComponent />
      </WishlistProvider>
    );

    expect(getByText("0")).toBeTruthy();
    fireEvent.press(getByText(BUTTON_WISHLIST_ADD_TEXT));
    expect(getByText("1")).toBeTruthy();
  });

  it("Should remove a film from the wishlist", async () => {
    const { getByText } = render(
      <WishlistProvider>
        <TestComponent />
      </WishlistProvider>
    );

    fireEvent.press(getByText(BUTTON_WISHLIST_ADD_TEXT));
    expect(getByText("1")).toBeTruthy();

    fireEvent.press(getByText(BUTTON_WISHLIST_REMOVE_TEXT));
    expect(getByText("0")).toBeTruthy();
  });

  it("Should not add a duplicate film to the wishlist", async () => {
    const { getByText } = render(
      <WishlistProvider>
        <TestComponent />
      </WishlistProvider>
    );

    const addButton = getByText(BUTTON_WISHLIST_ADD_TEXT);
    fireEvent.press(addButton);
    expect(getByText("1")).toBeTruthy();

    expect(getByText(BUTTON_WISHLIST_REMOVE_TEXT)).toBeTruthy();

    fireEvent.press(getByText(BUTTON_WISHLIST_REMOVE_TEXT));
    expect(getByText("0")).toBeTruthy();
    expect(getByText(BUTTON_WISHLIST_ADD_TEXT)).toBeTruthy();
  });
});
