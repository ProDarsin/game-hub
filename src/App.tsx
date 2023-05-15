import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenersList from "./components/GenersList";
import { useState } from "react";
import { Genres } from "./hooks/useGeners";
import PlatFormSelector from "./components/PlatFormSelector";
import { PlatForm } from "./hooks/useGmaes";

 export interface GameQuery{
  genres: Genres | null
  platform:PlatForm| null
}

function App() {
  const [gameQuery,setGameQuery]= useState<GameQuery>({}as GameQuery)
  return (
    <Grid
      templateAreas={{
        base: `" nav" " main"`,
        lg: `" nav nav" " aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg:'200px 1fr'
      }}
    >
      <GridItem area="nav" >
        <Navbar/>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenersList onSelectedGenre={(genres)=>setGameQuery({...gameQuery,genres})} selectedGenres={gameQuery.genres}/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatFormSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform)=>setGameQuery({...gameQuery,platform})}/>
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
    </Grid>
  );
}

export default App;
