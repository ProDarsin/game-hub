import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGeners";
import getCroppedImage from "../services/image-url";

const GenersList = () => {
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
            <Text fontSize='lg'>{genres.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenersList;
