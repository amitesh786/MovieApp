import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { RootStackParamList } from "../types";

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "HomeScreen">;

export interface SplashScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "HomeScreen">;
}

export type DetailScreenRouteProp = RouteProp<RootStackParamList, "DetailScreen">;
export type DetailScreenNavigationProp = StackNavigationProp<RootStackParamList, "DetailScreen">;

export interface DetailScreenProps {
  route: DetailScreenRouteProp;
  navigation: DetailScreenNavigationProp;
}

export interface Genre {
  id: number;
  name: string;
}

export interface FilmDetailsResponse {
  poster_path: string;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  genres: Genre[];
}
