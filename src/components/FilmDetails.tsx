import React from "react";

import AddToWishlistButton from "../components/AddToWishlistButton";

import styled from "styled-components/native";

import { FilmDetailsProps } from "./types";

const FilmDetails: React.FC<FilmDetailsProps> = ({ posterPath, title, description, filmId, filmPosterPath }) => (
  <RowContainer>
    <ImageContainer>
      <PosterImage source={{ uri: `https://image.tmdb.org/t/p/w500${posterPath}` }} resizeMode="cover" testID="film-poster-image" />
    </ImageContainer>

    <DetailsContainer>
      <TitleAndDescriptionContainer>
        <FilmTitle>{title}</FilmTitle>
        <FilmDescription>{description}</FilmDescription>
      </TitleAndDescriptionContainer>
      <AddToWishlistButton filmId={filmId} filmTitle={title} filmPosterPath={filmPosterPath} testID="add-to-wishlist-button" />
    </DetailsContainer>
  </RowContainer>
);

const RowContainer = styled.View`
  flex-direction: row;
`;

const ImageContainer = styled.View`
  flex: 1;
  margin-right: ${(props) => props.theme.margins.medium || 10}px;
`;

const PosterImage = styled.Image`
  width: ${(props) => props.theme.widths.full};
  height: 400px;
  border-radius: ${(props) => props.theme.borderRadius.large || 12}px;
`;

const DetailsContainer = styled.View`
  flex: 2;
  justify-content: space-between;
`;

const TitleAndDescriptionContainer = styled.View`
  flex: 1;
`;

const FilmTitle = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.large || 20}px;
  font-weight: bold;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: ${(props) => props.theme.margins.small || 5}px;
`;

const FilmDescription = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.medium || 16}px;
  color: ${(props) => props.theme.colors.secondary};
  font-weight: 400;
  font-family: "Roboto";
  margin-bottom: ${(props) => props.theme.margins.medium || 10}px;
`;

export default FilmDetails;
