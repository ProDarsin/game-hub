import axios from "axios"

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'f511a099be07431c9ee93e17ceb57147'
    }
})