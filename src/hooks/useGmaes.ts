import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genres } from "./useGeners";

export interface PlatForm {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: PlatForm }[];
  metacritic: number;
}

const useGames = (
  selectedGenres: Genres | null,
  selectedPlatform: PlatForm | null
) =>
  useData<Game>(
    "/games",
    { params: { genres: selectedGenres?.id, platforms: selectedPlatform?.id } },
    [selectedGenres?.id,selectedPlatform?.id]
  );

export default useGames;
