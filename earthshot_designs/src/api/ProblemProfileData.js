import axios from "axios"
import { API_URL } from "./ApiLink";

const getProblemProfileHeader = async(problemNumber) => {
    console.log("Inside of API")
    try {
        const response = await axios.get(`${API_URL}/getProblemProfileHeader`, {
            params: {
                problemNumber: problemNumber
            }
        })

        if(response) {
            console.log("Success in API")
            return response
        } else {
            console.log("Failure in API try")
            return null
        }
    } catch(err) {
        console.log("Failure inside API catch")
        return null
    }
}

const ProblemProfileRoutes = {
    getProblemProfileHeader
}

export default ProblemProfileRoutes