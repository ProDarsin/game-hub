import { Grid, GridItem, HStack as Flex, Show, Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenersList from "./components/GenersList";
import { useState } from "react";
import { Genres } from "./hooks/useGeners";
import PlatFormSelector from "./components/PlatFormSelector";
import { PlatForm } from "./hooks/useGmaes";
import SortSelector from "./components/sortSelector";
import GameHeading from "./components/GameHeading";

 export interface GameQuery{
  genres: Genres | null
  platform:PlatForm| null
   sortOrder: string
   searchText:string
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
        <Navbar onSearch={(searchText)=>setGameQuery({...gameQuery,searchText})}/>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenersList onSelectedGenre={(genres)=>setGameQuery({...gameQuery,genres})} selectedGenres={gameQuery.genres}/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery}/>
          <Flex marginBottom={5}>
            <Box marginRight={2}>
          <PlatFormSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform)=>setGameQuery({...gameQuery,platform})}/>
            </Box>
          <SortSelector sortOrder={gameQuery.sortOrder} onSelectedSortOrder={(sortOrder)=>setGameQuery({...gameQuery,sortOrder})}/>
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
