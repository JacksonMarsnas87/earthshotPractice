import "../../styles/CountryNavCard.css"
import MetricBar from "./MetricBar";
import { useState } from "react";

function CountryNavCard({ country, continent, metrics, imageName, ranking, setIsModalOpen, setModalData }) {

  const [isSelected, setIsSelected] = useState(false)
  
  return (
    <div className="CountryNavCard" onMouseEnter={() => setIsSelected(true)} onMouseLeave={() => setIsSelected(false)} onClick={() => {
          setIsModalOpen(true)
          setModalData({
            country: country,
            continent: continent,
            imageName: imageName
          })
        }
      }>
        <p className="CountryRank">{ranking}</p>
        <div className="CountryNavCardTextContainer">
          <h1 className="NavCardCountryName">{country}</h1>
          <p className="NavCardCountryContinent">{continent}</p>
        </div>

        <img className="NavCardCountryImage" src={require(`../../images/countryImages/${imageName}.jpg`)} />
        <div className="CountryNavCardMetricContainer">
          <div className="CountryNavCardMetricContainerInner">
            <p className="CountryNavCardMetric">Metric1</p>
            <div className="CountryNavCardMetricBarContainer">
              <MetricBar fill={metrics.metric1} isSelected={isSelected} />
            </div>
          </div>
          <div className="CountryNavCardMetricContainerInner">
            <p className="CountryNavCardMetric">Metric2</p>
            <div className="CountryNavCardMetricBarContainer">
              <MetricBar fill={metrics.metric2} isSelected={isSelected} />
            </div>
          </div>
          <div className="CountryNavCardMetricContainerInner">
            <p className="CountryNavCardMetric">Metric3</p>
            <div className="CountryNavCardMetricBarContainer">
              <MetricBar fill={metrics.metric3} isSelected={isSelected} />
            </div>
          </div>
          <div className="CountryNavCardMetricContainerInner">
            <p className="CountryNavCardMetric">Metric4</p>
            <div className="CountryNavCardMetricBarContainer">
              <MetricBar fill={metrics.metric4} isSelected={isSelected} />
            </div>
          </div>
        </div>
    </div>
  );
}

export default CountryNavCard;