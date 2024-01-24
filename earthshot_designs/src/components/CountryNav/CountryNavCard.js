import "../../styles/CountryNavCard.css"
import bangkok from "../../images/countryImages/bangkok-thailand.jpg"
import MetricBar from "./MetricBar";

function CountryNavCard({ country, continent, metrics, imageName }) {
  return (
    <div className="CountryNavCard">
        <div className="CountryNavCardTextContainer">
          <h1 className="NavCardCountryName">{country}</h1>
          <p className="NavCardCountryContinent">{continent}</p>
        </div>

        <img className="NavCardCountryImage" src={require(`../../images/countryImages/${imageName}.jpg`)} />
        <div className="CountryNavCardMetricContainer">
          <div className="CountryNavCardMetricContainerInner">
            <p className="CountryNavCardMetric">Metric1</p>
            <MetricBar />
          </div>
          <div className="CountryNavCardMetricContainerInner">
            <p className="CountryNavCardMetric">Metric2</p>
            <MetricBar />
          </div>
          <div className="CountryNavCardMetricContainerInner">
            <p className="CountryNavCardMetric">Metric3</p>
            <MetricBar />
          </div>
          <div className="CountryNavCardMetricContainerInner">
            <p className="CountryNavCardMetric">Metric4</p>
            <MetricBar />
          </div>
        </div>
    </div>
  );
}

export default CountryNavCard;