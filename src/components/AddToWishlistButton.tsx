import React from "react";

import { useWishlist } from "../context/WishlistContext";

import { BUTTON_WISHLIST_ADD_TEXT, BUTTON_WISHLIST_REMOVE_TEXT } from "../utils/constants";

import styled from "styled-components/native";

import { AddToWishlistButtonProps } from "./types";

const AddToWishlistButton: React.FC<AddToWishlistButtonProps> = ({ filmId, filmTitle, filmPosterPath }) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  const isInWishlist = wishlist.some((film) => film.id === filmId);

  const handlePress = () => {
    const film = {
      id: filmId,
      title: filmTitle,
      poster_path: filmPosterPath,
      overview: "",
    };
    if (isInWishlist) {
      removeFromWishlist(filmId);
    } else {
      addToWishlist(film);
    }
  };

  return (
    <ButtonContainer onPress={handlePress}>
      <ButtonText>{isInWishlist ? BUTTON_WISHLIST_REMOVE_TEXT : BUTTON_WISHLIST_ADD_TEXT}</ButtonText>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.TouchableOpacity`
  margin-top: ${(props) => props.theme.margins.none || 0}px;
  background-color: ${(props) => props.theme.colors.blue};
  border-radius: ${(props) => props.theme.borderRadius.medium || 8}px;
  align-items: center;
  justify-content: center;
  height: 35px;
`;

const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.medium || 16}px;
  font-family: ${(props) => props.theme.fonts.bold};
`;

export default AddToWishlistButton;
