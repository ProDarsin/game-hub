import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGeners";
import getCroppedImage from "../services/image-url";

interface Props{
  onSelectedGenre:(genres:Genres)=>void
}
const GenersList = ({onSelectedGenre}:Props) => {
  const { data, isLoading, error } = useGenres();
  if(error) return null
  if(isLoading) return <Spinner/>
  return (
    <List>
      {data.map((genres) => (
        <ListItem key={genres.id} paddingY='5px'>
          <HStack>
            <Image
              src={ getCroppedImage(genres.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Button fontSize='lg' variant='link' onClick={()=>onSelectedGenre(genres)}>{genres.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenersList;
