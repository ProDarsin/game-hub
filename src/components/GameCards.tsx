import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react"
import { Game } from "../hooks/useGmaes"
import PlatformIconList from "./PlatformIconList"

interface Props{
    game:Game
}
const GameCards = ({game}:Props) => {
  return (
    <Card borderRadius={10} overflow='hidden'>
          <Image src={game.background_image} />
          <CardBody>
              <Heading fontSize='2xlg'>{ game.name}</Heading>
              <PlatformIconList platform={game.parent_platforms.map(p=>p.platform)}/>
          </CardBody>
    </Card>
  )
}

export default GameCards