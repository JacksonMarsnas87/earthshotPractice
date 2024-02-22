import axios from "axios"
import { API_URL } from "./ApiLink";

const getCountryNavCardData = async() => {
    try {
        const response = await axios.get(`${API_URL}/getCountryNavCardData`)

        if(response) {
            return response
        } else {
            return null
        }
    } catch(err) {
        return null
    }
}

const CountryNavCardRoutes = {
    getCountryNavCardData
}

export default CountryNavCardRoutes