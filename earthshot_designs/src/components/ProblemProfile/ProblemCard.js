import ProblemHeaderCard from "./ProblemHeaderCard";
import bycountry from "../../images/bycountry.png";
import ProblemProfileCountry from "./ProblemProfileCountry";
import { useState, useEffect } from "react";
import "../../styles/ProblemCard.css"
import ProblemProfileRoutes from "../../api/ProblemProfileData";

function ProblemCard({ header, title, problemNumber }) {
    const [countryData, setCountryData] = useState(null)
    const [graphData, setGraphData] = useState(null)

    const getProblemProfileCountryData = async (problemNumber) => {
        try {
            const res = await ProblemProfileRoutes.getProblemProfileCountry(problemNumber)

            if (res) {
                setCountryData(res.data)
            } else {
                return null
            }
        } catch(err) {
            return null
        }
    }

    const getGraphData = async(problemNumber) => {
        try {
            const res = await ProblemProfileRoutes.getGraphData(problemNumber)

            if (res) {
                setGraphData(res)
            } else {
                return null
            }
        } catch(err) {
            return null
        }
    }

    useEffect(() => {
        getProblemProfileCountryData(problemNumber)
        getGraphData(problemNumber)
    }, [])

    return (
        <div className="blackBg">
            {
                countryData && graphData ?

                <div className="OutterContainer">
                    <div className="ProblemHeaderCardContainer">
                        <ProblemHeaderCard header={header} title={title} summary={"Globally, 1 in 3 != safe drinking water, mostly != LDC's"} details={["Here is a fact", "Here is another fact. This one is much longer and will take up multiple lines", "Here is a third fact"]} progressBarLabels={["HIGH", "HIGH", "HIGH"]} />
                    </div>
    
                    <img className="ByCountryImage" src={bycountry} />
    
                    <div className="CountryCardContainer">
                        {
                            countryData.map((data) => {
                                return <ProblemProfileCountry header={header} data={data} graphData={graphData[data.graphDataNumber].data} progressBarLabels={[{"label": "HIGH...", "colour": "#34ba5c"}, {"label": "HIGH...", "colour": "#34ba5c"}, {"label": "HIGH...", "colour": "#34ba5c"}]}/>
                            })
                        }
                    </div>
                </div>
    
                :
    
                <h1>Loading...</h1>
            }
        </div>
    );
}
  
export default ProblemCard;