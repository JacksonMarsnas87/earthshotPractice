import ProblemCard from "./ProblemCard";
import { useState, useEffect } from "react";
import ProblemProfileData from "../testdata/TestProblemProfileData";
import { useNavigate, useParams } from "react-router-dom";

function Design2() {

    const [data, setData] = useState(0)
    const [probNum, setProbNum] = useState(0)
    const navigate = useNavigate()
    const { problemNumber } = useParams()

    useEffect(() => {
        // Get data for the header card. The data for the children can be retrieved from the ProblemCard component in a useEffect
        setData(ProblemProfileData[problemNumber])
        setProbNum(problemNumber)
    }, [])

    return (
        <div>
            <button onClick={() => navigate("/design1")}>Navigate to design 1</button>
            <ProblemCard header={data.header} title={data.title} problemNumber={probNum} />
        </div>
    );
}
  
export default Design2;
  