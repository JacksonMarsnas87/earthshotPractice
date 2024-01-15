import axios from "axios"
import { useQuery } from "react-query";
import { API_URL } from "./ApiLink";

const getNavCardData = async() => {
    try {
        const response = await axios.get(`${API_URL}/getNavCardData`)

        if(response) {
            return response
        } else {
            return null
        }
    } catch(err) {
        return null
    }
}

export const useNavDataQuery = () => {
    return useQuery(['navData'], getNavCardData)
}