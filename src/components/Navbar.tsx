import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo1.svg'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInputs from './SearchInputs'
interface Props{
  onSearch:(searchText:string)=>void
}
const Navbar = ({onSearch}:Props) => {
  return (
      <HStack  padding='10px'>
      <Image src={logo} boxSize='40px' /> 
      <SearchInputs onSearch={onSearch } />
       <ColorModeSwitch/>   
    </HStack>
  )
}

export default Navbar