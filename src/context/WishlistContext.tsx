import React, { ReactNode, createContext, useState } from "react";

import { ERROR_WISHLIST_PROVIDER } from "../utils/constants";

import { IFilms, WishlistContextType } from "./types";

export const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [wishlist, setWishlist] = useState<IFilms[]>([]);

  const addToWishlist = (film: IFilms) => {
    setWishlist((prevWishlist) => [...prevWishlist, film]);
  };

  const removeFromWishlist = (id: number) => {
    setWishlist((prevWishlist) => prevWishlist.filter((film) => film.id !== id));
  };

  return <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>{children}</WishlistContext.Provider>;
};

export const useWishlist = (): WishlistContextType => {
  const context = React.useContext(WishlistContext);
  if (!context) {
    throw new Error(ERROR_WISHLIST_PROVIDER);
  }
  return context;
};
