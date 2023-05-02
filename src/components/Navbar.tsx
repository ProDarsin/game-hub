import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo1.svg'
import ColorModeSwitch from './ColorModeSwitch'
const Navbar = () => {
  return (
      <HStack justifyContent='space-between' padding='10px'>
          <Image src={logo} boxSize='40px' /> 
       <ColorModeSwitch/>   
    </HStack>
  )
}

export default Navbar