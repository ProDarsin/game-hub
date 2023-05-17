import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genres } from "./useGeners";
import { GameQuery } from "../App";

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

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genres?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search:gameQuery.searchText
      },
    },
    [gameQuery]
  );

export default useGames;
