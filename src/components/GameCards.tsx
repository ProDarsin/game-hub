import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react"
import { Game } from "../hooks/useGmaes"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import getCroppedImage from "../services/image-url"

interface Props{
    game:Game
}
const GameCards = ({game}:Props) => {
  return (
    <Card>
          <Image src={ getCroppedImage(game.background_image)} />
          <CardBody>
        <HStack justifyContent='space-between' marginBottom={3}> 
        <PlatformIconList platform={game.parent_platforms.map(p => p.platform)} />
        <CriticScore score={game.metacritic}/>
        </HStack>
        <Heading fontSize='2xlg'>{game.name}</Heading>
          </CardBody>
    </Card>
  )
}

export default GameCards