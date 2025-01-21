import { IFilm } from "../types";

export interface CarouselProps {
  title: string;
  data: IFilm[];
  onSelect: (film: IFilm) => void;
}

export interface AddToWishlistButtonProps {
  filmId: number;
  filmTitle: string;
  filmPosterPath: string;
  testID?: string;
}

export interface WishlistItemProps {
  filmId: number;
  title: string;
  posterPath: string;
}

export interface AdditionalInfoProps {
  releaseDate: string;
  rating: number;
  genres: string[];
}

export interface FilmDetailsProps {
  posterPath: any;
  title: string;
  description: string;
  filmId: number;
  filmPosterPath: string;
}

export interface BottomNavigationProps {
  currentScreen: "Home" | "Wishlist" | "Details";
}
