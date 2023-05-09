import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios"

export interface PlatForm{
    id: number
    name: string
    slug:string
}
 export interface Game{
    id: number
     name: string
     background_image: string
   parent_platforms: { platform: PlatForm }[]
   metacritic:number
}
interface FetchGameResponse{
    count: number
    results:Game[]
}
const useGames=()=>{

    const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState('')
  const [isLoading,setLoading]=useState(false)
    useEffect(() => {
      const controller = new AbortController()
      setLoading(true)
        apiClient.get<FetchGameResponse>('/games',{signal:controller.signal})
        .then((res) => {
          console.log(res.data); // log the API response data to the console
          setGames(res.data.results);
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
    return {games,error,isLoading}
}

export default useGames