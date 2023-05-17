import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo1.svg'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInputs from './SearchInputs'
const Navbar = () => {
  return (
      <HStack  padding='10px'>
      <Image src={logo} boxSize='40px' /> 
      <SearchInputs/>
       <ColorModeSwitch/>   
    </HStack>
  )
}

export default Navbar