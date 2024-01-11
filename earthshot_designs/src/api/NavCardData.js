import axios from "axios"
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

const NavCardRoutes = {
    getNavCardData
}

export default NavCardRoutes