import ProblemCard from "./ProblemCard";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProblemProfileRoutes from "../../api/ProblemProfileData";

function Design2() {

    const getProblemProfileHeaderData = async (problemNumber) => {
        try {
            const res = await ProblemProfileRoutes.getProblemProfileHeader(problemNumber)

            if (res) {
                console.log(res.data)
                setHeaderData(res.data)
                return res
            } else {
                return null
            }
        } catch(err) {
            return null
        }
    }

    const navigate = useNavigate()
    const { problemNumber } = useParams()
    const [headerData, setHeaderData] = useState(null)

    useEffect(() => {
        // Get the data for the header card from he backend
        getProblemProfileHeaderData(problemNumber)
    }, [])

    return (
        <div>
            {
                headerData ?

                <>
                    <button onClick={() => navigate("/design1")}>Navigate to design 1</button>
                    <ProblemCard header={headerData.header} title={headerData.title} problemNumber={problemNumber} />
                </>

                :

                <h1>Loading...</h1>
            }
        </div>
    );
}
  
export default Design2;
  