import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios"
interface Genres{
    id: number
    name:string
}

interface FetchGenresResponse{
    count: number
    results:Genres[]
}
const useGenres = () => {
    const [genres, setGenres] = useState<Genres[]>([])
    const [error, setError] = useState('')
    const [isLoading,setLoading]=useState(false)
      useEffect(() => {
        const controller = new AbortController()
        setLoading(true)
          apiClient.get<FetchGenresResponse>('/genres',{signal:controller.signal})
          .then((res) => {
            console.log(res.data); // log the API response data to the console
            setGenres(res.data.results);
            setLoading(false)
          })
          .catch((err) => {
            console.error(err); // log any errors to the console
            if(err instanceof CanceledError) return
            setError(err.message);
            setLoading(false)
          });
        
          return ()=> controller.abort()
      },[])
      return {genres,error,isLoading}
}

export default useGenres