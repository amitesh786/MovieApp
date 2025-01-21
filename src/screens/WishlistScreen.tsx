import React from "react";
import { ScrollView, Text, View } from "react-native";

import { useWishlist } from "../context/WishlistContext";

import BottomNavigation from "../components/BottomNavigation";
import WishlistItem from "../components/WishlistItem";

import styled from "styled-components/native";

const WishlistScreen: React.FC = () => {
  const { wishlist } = useWishlist();

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {wishlist.length > 0 ? (
          wishlist.map((film) => <WishlistItem key={film.id} filmId={film.id} title={film.title} posterPath={film.poster_path} />)
        ) : (
          <NoItemsMessage>
            <Text>Your wishlist is empty</Text>
          </NoItemsMessage>
        )}
      </ScrollView>

      <BottomNavigation currentScreen="Wishlist" />
    </View>
  );
};

export default WishlistScreen;

const NoItemsMessage = styled.View`
  align-items: center;
  justify-content: center;
  height: 200px;
`;
