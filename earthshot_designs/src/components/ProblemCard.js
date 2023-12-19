import ProblemHeaderCard from "./ProblemHeaderCard";
import bycountry from "../images/bycountry.png";
import ProblemProfileCountry from "./ProblemProfileCountry";

function ProblemCard({ header, title }) {
    const testData = {
        title: "Cancer rates in India are 20% higher than the global average. This rate is even worse in more impoverished parts of the country.",
        summary: "Among more impoverished parts of the country and those who work in poor conditions, the cancer rate is almost 40% above the global average. This is no statistical anomaly. Thousands are dying every year as a result. However, most of these deaths are preventable by improving work conditions and making medical treatments more accessible for the less fortunate.",
        causes: {
            headline: "There are a number of potential reasons the cancer rate and mortality rate is so much higher in impoverished parts of India, including:",
            points: [
                {
                    title: "Industry",
                    subpoints: ["Mining is a booming industry in rural parts of India. Sometimes mining byproducts end up in streams and drinking water", "The production of clothing is also a major industry. The dying process for clothing sometimes uses stream water. This can result in harmful chemicals being washed downstream", "There is a lack of safety equipment for workers that work with hazardous materials"]
                },
                {
                    title: "Treatment",
                    subpoints: ["Rural areas lack treatment facilities", "Nearly 60% of facilities lack the proper technology or medicine", "Most people can’t afford expensive treatment"]
                }
            ],
            mainCause: "The easiest way to lower the mortality rate is through prevention. The likely cause for many cancer cases is industry and the improper handling of waste and chemicals, as detailed above. Notably, villages that are nearby mining facilities have drastically higher rates of disease. Not only do they have higher cancer rates, but other complications such as birth defects as well. The graph below shows the relation between proximity with a mining facility and the average rate of cancer per 1000 people.",
            closingPoint: "The solution of this problem would result in a much lower mortality rate due to cancer in impoverished areas. Not only that, but it would force industry safety standards, particularly in concern with chemical misuse, to become more strict. With better standards and lower mortality rate, the members of impoverished groups will be able to contribute more and grow their own local economies."
        }
    }

    return (
        <div>
            <div id="Header" style={{display: "flex", justifyContent: "center"}}>
                <ProblemHeaderCard header={header} title={title} summary={"Globally, 1 in 3 != safe drinking water, mostly != LDC's"} details={["Here is a fact", "Here is another fact. This one is much longer and will take up multiple lines", "Here is a third fact"]} progressBarLabels={["HIGH", "HIGH", "HIGH"]} />
            </div>

            <img id="Image" src={bycountry} style={{marginTop: "40px"}} />

            <div id="CardContainer" style={{display: "flex", justifyContent: "center", marginTop: "40px", gap: "20px"}}>
                <ProblemProfileCountry id="card1" header={header} title={testData.title} summary={testData.summary} causes={testData.causes} progressBarLabels={[{"label": "HIGH...", "colour": "#34ba5c"}, {"label": "HIGH...", "colour": "#34ba5c"}, {"label": "HIGH...", "colour": "#34ba5c"}]}/>
                {/* <ProblemProfileCountry id="card2" header={header} title={"40M in India"} summary={"Causing XX deaths, YY reduction in QALY's, ZZ $ cost."} profile={"problem profile."} progressBarLabels={[{"label": "MED SOLVABILITY", "colour": "#bdcf38"}, {"label": "MED OPPORTUNITY", "colour": "#bdcf38"}, {"label": "HIGH IMPACT", "colour": "#34ba5c"}]} />
                <ProblemProfileCountry id="card3" header={header} title={"40M in India"} summary={"Causing XX deaths, YY reduction in QALY's, ZZ $ cost."} profile={"problem profile."} progressBarLabels={[{"label": "HIGH...", "colour": "#34ba5c"}, {"label": "HIGH...", "colour": "#34ba5c"}, {"label": "HIGH...", "colour": "#34ba5c"}]} /> */}
            </div>
        </div>
    );
}
  
export default ProblemCard;