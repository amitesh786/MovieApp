import React from "react";

import { useWishlist } from "../context/WishlistContext";

import styled from "styled-components/native";

import { WishlistItemProps } from "./types";

const WishlistItem: React.FC<WishlistItemProps> = ({ filmId, title, posterPath }) => {
  const { removeFromWishlist } = useWishlist();

  const handleRemove = () => {
    removeFromWishlist(filmId);
  };

  return (
    <ItemContainer>
      <FilmImage source={{ uri: `https://image.tmdb.org/t/p/w500${posterPath}` }} testID="film-image" />
      <DetailsContainer>
        <FilmTitle>{title}</FilmTitle>
        <RemoveButton onPress={handleRemove}>
          <RemoveButtonText>Remove</RemoveButtonText>
        </RemoveButton>
      </DetailsContainer>
    </ItemContainer>
  );
};

const ItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${(props) => props.theme.paddings.medium || 10}px;
  margin-bottom: ${(props) => props.theme.margins.large || 15}px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.gray};
`;

const FilmImage = styled.Image`
  width: 60px;
  height: 90px;
  border-radius: ${(props) => props.theme.borderRadius.medium || 8}px;
`;

const DetailsContainer = styled.View`
  margin-left: ${(props) => props.theme.margins.large || 15}px;
  flex: 1;
`;

const FilmTitle = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.large || 20}px;
  font-weight: bold;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.primary}px;
`;

const RemoveButton = styled.TouchableOpacity`
  margin-top: ${(props) => props.theme.margins.medium || 10}px;
  background-color: ${(props) => props.theme.colors.red};
  padding: ${(props) => props.theme.paddings.small || 5}px;
  border-radius: ${(props) => props.theme.borderRadius.medium || 8}px;
  align-items: center;
`;

const RemoveButtonText = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.medium || 16}px;
`;

export default WishlistItem;
