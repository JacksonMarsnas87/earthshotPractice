import ProblemHeaderCard from "./ProblemHeaderCard";
import bycountry from "../images/bycountry.png";
import ProblemProfileCountry from "./ProblemProfileCountry";
import CountryData from "../testdata/TestDataCountry";
import { useState, useEffect } from "react";

// ALL data should be sent here, including the main card (header, title) AND child cards
function ProblemCard({ header, title, problemNumber }) {
    const [countryData, setCountryData] = useState(CountryData[problemNumber])

    useEffect(() => {
        setCountryData(CountryData[problemNumber])
    }, [problemNumber])

    return (
        <div>
            <div id="Header" style={{display: "flex", justifyContent: "center"}}>
                <ProblemHeaderCard header={header} title={title} summary={"Globally, 1 in 3 != safe drinking water, mostly != LDC's"} details={["Here is a fact", "Here is another fact. This one is much longer and will take up multiple lines", "Here is a third fact"]} progressBarLabels={["HIGH", "HIGH", "HIGH"]} />
            </div>

            <img id="Image" src={bycountry} style={{marginTop: "40px", maxWidth: "100%"}} />

            {/* This should be done by mapping over all of the countryData array. Since we don't have real data right now, it will be hardcoded for now */}
            <div id="CardContainer" style={{display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "40px", gap: "20px"}}>
                <ProblemProfileCountry id="card1" header={header} data={countryData[0]} progressBarLabels={[{"label": "HIGH...", "colour": "#34ba5c"}, {"label": "HIGH...", "colour": "#34ba5c"}, {"label": "HIGH...", "colour": "#34ba5c"}]}/>
                <ProblemProfileCountry id="card1" header={header} data={countryData[0]} progressBarLabels={[{"label": "HIGH...", "colour": "#34ba5c"}, {"label": "HIGH...", "colour": "#34ba5c"}, {"label": "HIGH...", "colour": "#34ba5c"}]}/>
                <ProblemProfileCountry id="card1" header={header} data={countryData[0]} progressBarLabels={[{"label": "HIGH...", "colour": "#34ba5c"}, {"label": "HIGH...", "colour": "#34ba5c"}, {"label": "HIGH...", "colour": "#34ba5c"}]}/>
            </div>
        </div>
    );
}
  
export default ProblemCard;