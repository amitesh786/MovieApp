import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, ScrollView, View } from "react-native";

import { fetchFilmDetails } from "../services/api";

import AdditionalInfo from "../components/AdditionalInfo";
import BottomNavigation from "../components/BottomNavigation";
import FilmDetails from "../components/FilmDetails";
import { ERROR_DATA_DETAIL } from "../utils/constants";

import styled from "styled-components/native";

import { DetailScreenProps, FilmDetailsResponse, Genre } from "./types";

const DetailScreen: React.FC<DetailScreenProps> = ({ route }) => {
  const { film } = route.params;
  const [filmDetails, setFilmDetails] = useState<FilmDetailsResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        const details = await fetchFilmDetails(film.id);
        setFilmDetails(details);
      } catch (error) {
        Alert.alert("Error", ERROR_DATA_DETAIL);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [film.id]);

  if (loading) {
    return <LoadingIndicator size="large" />;
  }

  return (
    <View style={{ flex: 1 }}>
      <Container>
        {filmDetails && (
          <>
            <FilmDetails
              posterPath={filmDetails.poster_path}
              title={filmDetails.title}
              description={filmDetails.overview}
              filmId={film.id}
              filmPosterPath={film.poster_path}
            />
            <AdditionalInfo
              releaseDate={filmDetails.release_date}
              rating={filmDetails.vote_average}
              genres={filmDetails.genres.map((genre: Genre) => genre.name)}
            />
          </>
        )}
      </Container>

      <BottomNavigation currentScreen="Details" />
    </View>
  );
};

export default DetailScreen;

const LoadingIndicator = styled(ActivityIndicator)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Container = styled(ScrollView)`
  padding: ${(props) => props.theme.paddings.extraLarge || 20}px;
  background-color: ${(props) => props.theme.borderRadius.medium || 8}px;
`;
