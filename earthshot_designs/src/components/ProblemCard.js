import ProblemHeaderCard from "./ProblemHeaderCard";
import bycountry from "../images/bycountry.png";
import ProblemProfileCountry from "./ProblemProfileCountry";

function ProblemCard({ header, title }) {
    return (
        // These details are hardcoded for now, but would likely be provided by an API
        <div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <ProblemHeaderCard header={header} title={title} summary={"Globally, 1 in 3 != safe drinking water, mostly != LDC's"} details={["Here is a fact", "Here is another fact. This one is much longer and will take up multiple lines", "Here is a third fact"]} progressBarLabels={["HIGH", "HIGH", "HIGH"]} />
            </div>

            <img src={bycountry} style={{marginTop: "40px"}} />

            <div style={{display: "flex", justifyContent: "center", marginTop: "40px", gap: "20px"}}>
                <ProblemProfileCountry header={header} amount={"40m"} country={"Ethiopia"} summary={"Causing XX deaths, YY reduction in QALY's, ZZ $ cost."} profile={"problem profile."} progressBarLabels={[{"label": "HIGH...", "colour": "#34ba5c"}, {"label": "HIGH...", "colour": "#34ba5c"}, {"label": "HIGH...", "colour": "#34ba5c"}]}/>
                <ProblemProfileCountry header={header} amount={"32m"} country={"Afghanistan"} summary={"Causing XX deaths, YY reduction in QALY's, ZZ $ cost."} profile={"problem profile."} progressBarLabels={[{"label": "MED SOLVABILITY", "colour": "#bdcf38"}, {"label": "MED OPPORTUNITY", "colour": "#bdcf38"}, {"label": "HIGH IMPACT", "colour": "#34ba5c"}]} />
                <ProblemProfileCountry header={header} amount={"163m"} country={"India"} summary={"Causing XX deaths, YY reduction in QALY's, ZZ $ cost."} profile={"problem profile."} progressBarLabels={[{"label": "HIGH...", "colour": "#34ba5c"}, {"label": "HIGH...", "colour": "#34ba5c"}, {"label": "HIGH...", "colour": "#34ba5c"}]} />
            </div>
        </div>
    );
}
  
export default ProblemCard;