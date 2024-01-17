import axios from "axios"
import { API_URL } from "./ApiLink";

const getProblemProfileHeader = async(problemNumber) => {
    try {
        const response = await axios.get(`${API_URL}/getProblemProfileHeader`, {
            params: {
                problemNumber: problemNumber
            }
        })

        if(response) {
            return response
        } else {
            return null
        }
    } catch(err) {
        return null
    }
}

const getProblemProfileCountry = async(problemNumber) => {
    try {
        const response = await axios.get(`${API_URL}/getProblemProfileCountry`, {
            params: {
                problemNumber: problemNumber
            }
        })

        if(response) {
            return response
        } else {
            return null
        }
    } catch(err) {
        return null
    }
}

const getGraphData = async(problemNumber) => {
    try {
        const response = await axios.get(`${API_URL}/getGraphData`, {
            params: {
                problemNumber: problemNumber
            }
        })

        if(response) {
            let dataObject = {}
            for (let i = 0; i < response.data.length; i++) {
                let graphNumber = response.data[i].graphDataNumber
                dataObject[graphNumber] = response.data[i]
            }
            return dataObject
        } else {
            return null
        }
    } catch(err) {
        return null
    }
}

const ProblemProfileRoutes = {
    getProblemProfileHeader,
    getProblemProfileCountry,
    getGraphData
}

export default ProblemProfileRoutes