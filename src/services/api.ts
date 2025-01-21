import { BASE_URL, TM_DATABASE_API_KEY } from "@env";

import { ERROR_FILM_API_DATA, ERROR_FILM_DETAIL_API_DATA } from "../utils/constants";

export const fetchFilms = async (category: string) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${category}?api_key=${TM_DATABASE_API_KEY}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching films:", error);
    return { error: ERROR_FILM_API_DATA };
  }
};

export const fetchFilmDetails = async (filmId: number) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${filmId}?api_key=${TM_DATABASE_API_KEY}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching film details:", error);
    return { error: ERROR_FILM_DETAIL_API_DATA };
  }
};
