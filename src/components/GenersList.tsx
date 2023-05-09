import React from 'react'
import useGenres from '../hooks/useGeners'

const GenersList = () => {
    const{genres,error,isLoading}=useGenres()
  return (
      <ul>
          {genres.map(genres => <li key={genres.id}>{ genres.name}</li>)}
   </ul>
  )
}

export default GenersList