import Axios from 'axios'

const axios = Axios.create({
    baseURL:'https://api.stackexchange.com'
})

export default axios