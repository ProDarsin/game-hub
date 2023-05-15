import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { AxiosRequestConfig, CanceledError } from "axios"

interface FetchResponse<T>{
    count: number
    results:T[]
}
const useData = <T>(endpoint:string,requestConfig?:AxiosRequestConfig,deps?:any[]) => {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState('')
    const [isLoading,setLoading]=useState(false)
      useEffect(() => { 
        const controller = new AbortController()
        setLoading(true)
          apiClient.get<FetchResponse<T>>(endpoint,{signal:controller.signal,...requestConfig})
          .then((res) => {
            console.log(res.data); // log the API response data to the console
            setData(res.data.results);
            setLoading(false)
          })
          .catch((err) => {
            console.error(err); // log any errors to the console
            if(err instanceof CanceledError) return
            setError(err.message);
            setLoading(false)
          });
        
          return ()=> controller.abort()
      },deps?[...deps]:[])
      return {data,error,isLoading}
}

export default useData