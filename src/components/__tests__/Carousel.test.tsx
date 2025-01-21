import React from "react";

import { fireEvent, render, waitFor } from "@testing-library/react-native";

import Carousel from "../Carousel";

import { ThemeProvider } from "styled-components/native";

const mockTheme = {
  margins: { small: "8", medium: "16", extraLarge: "24" },
  fontSizes: { medium: "14" },
  borderRadius: { large: "12" },
  fonts: { bold: "bold" },
  colors: { primary: "#FF6347" },
};

const mockData = [
  { id: 1, title: "Film 1", poster_path: "/path/to/poster1.png" },
  { id: 2, title: "Film 2", poster_path: "/path/to/poster2.png" },
  { id: 3, title: "Film 3", poster_path: "/path/to/poster3.png" },
];

const customRender = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={mockTheme}>{ui}</ThemeProvider>);
};

describe("Carousel", () => {
  it("Should render the category title correctly", () => {
    const { getByText } = customRender(<Carousel title="Popular Films" data={mockData} onSelect={jest.fn()} />);

    expect(getByText("Popular Films")).toBeTruthy();
  });

  it("Should render the correct number of items", async () => {
    const { getAllByTestId } = customRender(<Carousel title="Popular Films" data={mockData} onSelect={jest.fn()} />);
    await waitFor(() => {
      const items = getAllByTestId(/^film-item-/);
      expect(items).toHaveLength(mockData.length);
    });
  });

  it("Should call onSelect when an item is pressed", () => {
    const onSelectMock = jest.fn();
    const { getByText } = customRender(<Carousel title="Popular Films" data={mockData} onSelect={onSelectMock} />);

    fireEvent.press(getByText("Film 1"));
    expect(onSelectMock).toHaveBeenCalledWith(mockData[0]);
  });

  it("Should display the film poster and title correctly", () => {
    const { getByText, getByTestId } = customRender(<Carousel title="Popular Films" data={mockData} onSelect={jest.fn()} />);
    expect(getByText("Film 1")).toBeTruthy();

    const filmPoster = getByTestId("film-poster-1");
    expect(filmPoster.props.source.uri).toBe("https://image.tmdb.org/t/p/w500/path/to/poster1.png");
  });
});
