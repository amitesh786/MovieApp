import { IFilm } from "../types";

export interface IFilms extends IFilm {
  overview: string;
}

export interface WishlistContextType {
  wishlist: IFilms[];
  addToWishlist: (film: IFilms) => void;
  removeFromWishlist: (id: number) => void;
}
