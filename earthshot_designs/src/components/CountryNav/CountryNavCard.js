import "../../styles/CountryNavCard.css"
import bangkok from "../../images/countryImages/bangkok-thailand.jpg"
import MetricBar from "./MetricBar";
import { useState } from "react";

function CountryNavCard({ country, continent, metrics, imageName }) {

  const [isSelected, setIsSelected] = useState(false)
  
  return (
    <div className="CountryNavCard" onMouseEnter={() => setIsSelected(true)} onMouseLeave={() => setIsSelected(false)}>
        <div className="CountryNavCardTextContainer">
          <h1 className="NavCardCountryName">{country}</h1>
          <p className="NavCardCountryContinent">{continent}</p>
        </div>

        <img className="NavCardCountryImage" src={require(`../../images/countryImages/${imageName}.jpg`)} />
        <div className="CountryNavCardMetricContainer">
          <div className="CountryNavCardMetricContainerInner">
            <p className="CountryNavCardMetric">Metric1</p>
            <MetricBar fill={50} isSelected={isSelected} />
          </div>
          <div className="CountryNavCardMetricContainerInner">
            <p className="CountryNavCardMetric">Metric2</p>
            <MetricBar fill={10} isSelected={isSelected} />
          </div>
          <div className="CountryNavCardMetricContainerInner">
            <p className="CountryNavCardMetric">Metric3</p>
            <MetricBar fill={90} isSelected={isSelected} />
          </div>
          <div className="CountryNavCardMetricContainerInner">
            <p className="CountryNavCardMetric">Metric4</p>
            <MetricBar fill={100} isSelected={isSelected} />
          </div>
        </div>
    </div>
  );
}

export default CountryNavCard;