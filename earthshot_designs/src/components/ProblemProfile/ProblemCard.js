import ProblemHeaderCard from "./ProblemHeaderCard";
import bycountry from "../../images/bycountry.png";
import ProblemProfileCountry from "./ProblemProfileCountry";
import CountryData from "../../testdata/TestDataCountry";
import TestGraphData from "../../testdata/TestGraphData";
import { useState, useEffect } from "react";
import "../../styles/ProblemCard.css"
import ProblemProfileRoutes from "../../api/ProblemProfileData";

// ALL data should be sent here, including the main card (header, title) AND child cards
function ProblemCard({ header, title, problemNumber }) {
    // const [countryData, setCountryData] = useState(CountryData[problemNumber])
    const [countryData, setCountryData] = useState(null)
    const [graphData, setGraphData] = useState(TestGraphData[problemNumber])

    const getProblemProfileCountryData = async (problemNumber) => {
        try {
            const res = await ProblemProfileRoutes.getProblemProfileCountry(problemNumber)

            if (res) {
                setCountryData(res.data)
                return res
            } else {
                return null
            }
        } catch(err) {
            return null
        }
    }

    useEffect(() => {
        // This is an array of problem statements to be mapped over. Should be retrieved from a database (retrieve all entries with the same problemNumber)
        // Also get the graph data for all profiles within this problem
        setGraphData(TestGraphData[problemNumber])
        getProblemProfileCountryData(problemNumber)
    }, [])

    return (
        <>
            {
                countryData ?

                <div className="OutterContainer">
                    <div className="ProblemHeaderCardContainer">
                        <ProblemHeaderCard header={header} title={title} summary={"Globally, 1 in 3 != safe drinking water, mostly != LDC's"} details={["Here is a fact", "Here is another fact. This one is much longer and will take up multiple lines", "Here is a third fact"]} progressBarLabels={["HIGH", "HIGH", "HIGH"]} />
                    </div>
    
                    <img className="ByCountryImage" src={bycountry} />
    
                    {/* This should be done by mapping over all of the countryData array. Since we don't have real data right now, it will be hardcoded for now */}
                    <div className="CountryCardContainer">
                        {
                            countryData.map((data) => (
                                <ProblemProfileCountry header={header} data={data} graphData={graphData} progressBarLabels={[{"label": "HIGH...", "colour": "#34ba5c"}, {"label": "HIGH...", "colour": "#34ba5c"}, {"label": "HIGH...", "colour": "#34ba5c"}]}/>
                            ))
                        }
                    </div>
                </div>
    
                :
    
                <h1>Loading...</h1>
            }
        </>
    );
}
  
export default ProblemCard;