import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenersList from "./components/GenersList";
import { useState } from "react";
import { Genres } from "./hooks/useGeners";
import PlatFormSelector from "./components/PlatFormSelector";
import { PlatForm } from "./hooks/useGmaes";



function App() {
  const [selectedGenres, setSelectedGenres] = useState<Genres | null>(null)
  const [selectedPlatform,setSelectedPlatform]= useState<PlatForm| null>(null)
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
          <GenersList onSelectedGenre={(genres)=>setSelectedGenres(genres)} selectedGenres={selectedGenres}/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatFormSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform)=>setSelectedPlatform(platform)}/>
        <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenres}/>
      </GridItem>
    </Grid>
  );
}

export default App;
