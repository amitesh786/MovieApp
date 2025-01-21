import React from "react";
import { FlatList, TouchableOpacity } from "react-native";

import styled from "styled-components/native";

import { CarouselProps } from "./types";

const Carousel: React.FC<CarouselProps> = ({ title, data, onSelect }) => (
  <Container>
    <CategoryTitle>{title}</CategoryTitle>
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onSelect(item)} testID={`film-item-${item.id}`}>
          <FilmPoster source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} testID={`film-poster-${item.id}`} />
          <FilmTitle>{item.title}</FilmTitle>
        </TouchableOpacity>
      )}
    />
  </Container>
);

const Container = styled.View`
  margin-bottom: ${(props) => props.theme.margins.small || 5}px;
  margin-top: ${(props) => props.theme.margins.small || 5}px;
`;

const CategoryTitle = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.medium || 16}px;
  font-weight: bold;
  margin-left: ${(props) => props.theme.margins.medium || 10}px;
  margin-bottom: ${(props) => props.theme.margins.medium || 10}px;
`;

const FilmPoster = styled.Image`
  width: 120px;
  height: 180px;
  border-radius: ${(props) => props.theme.borderRadius.large || 12}px;
  margin: ${(props) => props.theme.margins.small || 5}px;
`;

const FilmTitle = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.medium || 16}px;
  text-align: center;
  margin-top: ${(props) => props.theme.margins.small || 5}px;
  max-width: 120px;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.primary};
`;

export default Carousel;
