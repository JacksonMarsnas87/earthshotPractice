import ProblemCard from "./ProblemCard";
import { useState, useEffect } from "react";
import ProblemProfileData from "../testdata/TestProblemProfileData";

function Design2() {

    const [data, setData] = useState(0)
    const [probNum, setProbNum] = useState(0)

    useEffect(() => {
        // Get data for the header card and ALL of its children. Create an API to do this
        // Some sort of "problem ID" (unique identifier) should be passed in the props to do this
        setData(ProblemProfileData[0])
    }, [])

    const changeData = () => {
        setData(ProblemProfileData[1])
        setProbNum(1)
    }

    return (
        <div>
            <button onClick={changeData}>Change data</button>
            <ProblemCard header={data.header} title={data.title} problemNumber={probNum} />
        </div>
    );
}
  
export default Design2;
  