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
        // Get data for the header card and ALL of its children. Create an API to do this
        // Some sort of "problem ID" (unique identifier) should be passed in the props to do this
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
  