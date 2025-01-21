import React from "react";

import { fireEvent, render } from "@testing-library/react-native";

import { useWishlist } from "../../context/WishlistContext";

import WishlistItem from "../WishlistItem";

import { ThemeProvider } from "styled-components/native";

jest.mock("../../context/WishlistContext", () => ({
  useWishlist: jest.fn(() => ({
    removeFromWishlist: jest.fn(),
  })),
}));

const mockTheme = {
  margins: { large: "16px", medium: "8px" },
  paddings: { medium: "16px", small: "8px" },
  fontSizes: { large: "20px", medium: "14px" },
  borderRadius: { medium: "10px" },
  colors: { primary: "#FF6347", gray: "#ccc", red: "#FF0000", white: "#FFF" },
  fonts: { bold: "bold" },
};

const mockFilm = {
  filmId: 1,
  title: "Film 1",
  posterPath: "/path/to/poster.png",
};

const customRender = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={mockTheme}>{ui}</ThemeProvider>);
};

describe("WishlistItem", () => {
  it("Should render the film poster with correct URI", () => {
    const { getByTestId } = customRender(<WishlistItem filmId={mockFilm.filmId} title={mockFilm.title} posterPath={mockFilm.posterPath} />);

    const filmImage = getByTestId("film-image");
    expect(filmImage.props.source.uri).toBe("https://image.tmdb.org/t/p/w500/path/to/poster.png");
  });

  it("Should render the film title", () => {
    const { getByText } = customRender(<WishlistItem filmId={mockFilm.filmId} title={mockFilm.title} posterPath={mockFilm.posterPath} />);

    expect(getByText(mockFilm.title)).toBeTruthy();
  });

  it("Should call removeFromWishlist when the remove button is pressed", () => {
    const removeFromWishlistMock = jest.fn();
    useWishlist.mockReturnValue({ removeFromWishlist: removeFromWishlistMock });

    const { getByText } = customRender(<WishlistItem filmId={mockFilm.filmId} title={mockFilm.title} posterPath={mockFilm.posterPath} />);
    const removeButton = getByText("Remove");

    fireEvent.press(removeButton);
    expect(removeFromWishlistMock).toHaveBeenCalledWith(mockFilm.filmId);
  });
});
