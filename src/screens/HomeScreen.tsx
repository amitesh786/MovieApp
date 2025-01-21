import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, ScrollView, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { fetchFilms } from "../services/api";

import BottomNavigation from "../components/BottomNavigation";
import Carousel from "../components/Carousel";
import { IFilm } from "../types";
import { ERROR_DATA, POPULAR, POPULAR_TITLE, SCREEN_DETAILS, TOPRATED, TOPRATED_TITLE, UPCOMING, UPCOMING_TITLE } from "../utils/constants";

import { HomeScreenNavigationProp } from "./types";

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [popular, topRated, upcoming] = await Promise.all([fetchFilms(POPULAR), fetchFilms(TOPRATED), fetchFilms(UPCOMING)]);
      setPopularMovies(popular);
      setTopRatedMovies(topRated);
      setUpcomingMovies(upcoming);
    } catch (error) {
      Alert.alert("Error", ERROR_DATA);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSelectFilm = (film: IFilm) => {
    navigation.navigate(SCREEN_DETAILS, { film });
  };

  if (loading) {
    return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Carousel title={POPULAR_TITLE} data={popularMovies} onSelect={handleSelectFilm} />
        <Carousel title={TOPRATED_TITLE} data={topRatedMovies} onSelect={handleSelectFilm} />
        <Carousel title={UPCOMING_TITLE} data={upcomingMovies} onSelect={handleSelectFilm} />
      </ScrollView>

      <BottomNavigation currentScreen="Home" />
    </View>
  );
};

export default HomeScreen;
