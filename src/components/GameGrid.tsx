import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { PlatForm } from "../hooks/useGmaes";
import GameCards from "./GameCards";
import GameCardSkelaton from "./GameCardSkelaton";
import GameCardContainer from "./GameCardContainer";
import { Genres } from "../hooks/useGeners";
import { GameQuery } from "../App";

interface Props{
  gameQuery:GameQuery

}
const GameGrid = ({gameQuery}:Props) => {
  const {  data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton} >
              <GameCardSkelaton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCards  game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
