import React from "react";

import { fireEvent, render } from "@testing-library/react-native";

import { WishlistProvider } from "../../context/WishlistContext";

import FilmDetails from "../FilmDetails";

import { ThemeProvider } from "styled-components/native";

const mockTheme = {
  margins: { medium: "16px" },
  fontSizes: { large: "20px", medium: "14px" },
  widths: { full: "100%" },
  borderRadius: { large: "12px" },
  fonts: { bold: "bold" },
  colors: { primary: "#FF6347", secondary: "#333" },
};

const mockFilm = {
  posterPath: "/path/to/poster.png",
  title: "Film 1",
  description: "This is a description of Film 1.",
  filmId: 1,
  filmPosterPath: "/path/to/poster.png",
};

const customRender = (ui: React.ReactElement) => {
  return render(
    <ThemeProvider theme={mockTheme}>
      <WishlistProvider>{ui}</WishlistProvider>
    </ThemeProvider>
  );
};

// eslint-disable-next-line jest/no-disabled-tests
describe.skip("FilmDetails", () => {
  it("Should render the film poster with correct URI", () => {
    const { getByTestId } = customRender(
      <FilmDetails
        posterPath={mockFilm.posterPath}
        title={mockFilm.title}
        description={mockFilm.description}
        filmId={mockFilm.filmId}
        filmPosterPath={mockFilm.filmPosterPath}
      />
    );

    const posterImage = getByTestId("film-poster-image");
    expect(posterImage.props.source.uri).toBe("https://image.tmdb.org/t/p/w500/path/to/poster.png");
  });

  it("Should render the film title AND description", () => {
    const { getByText } = customRender(
      <FilmDetails
        posterPath={mockFilm.posterPath}
        title={mockFilm.title}
        description={mockFilm.description}
        filmId={mockFilm.filmId}
        filmPosterPath={mockFilm.filmPosterPath}
      />
    );

    expect(getByText(mockFilm.title)).toBeTruthy();
    expect(getByText(mockFilm.description)).toBeTruthy();
  });

  it("Should render the AddToWishlistButton AND call onPress", () => {
    const onSelectMock = jest.fn();
    const { getByTestId } = customRender(
      <FilmDetails
        posterPath={mockFilm.posterPath}
        title={mockFilm.title}
        description={mockFilm.description}
        filmId={mockFilm.filmId}
        filmPosterPath={mockFilm.filmPosterPath}
      />
    );

    const addButton = getByTestId("add-to-wishlist-button");
    fireEvent.press(addButton);
    expect(onSelectMock).toHaveBeenCalledTimes(1);
  });
});
