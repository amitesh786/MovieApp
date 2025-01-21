import { NavigationProp } from "@react-navigation/native";

export interface IFilm {
  id: number;
  title: string;
  poster_path: string;
}

export type RootStackParamList = {
  HomeScreen: undefined;
  DetailScreen: { film: IFilm };
  SplashScreen: undefined;
  WishlistScreen: undefined;
};

export type AppNavigationProp = NavigationProp<RootStackParamList>;
