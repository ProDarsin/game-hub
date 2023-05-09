
import useGenres from '../hooks/useGeners'


const GenersList = () => {
    const { data } = useGenres()
        return(
      <ul>
          {data.map(genres => <li key={genres.id}>{ genres.name}</li>)}
   </ul>
  )
}

export default GenersList