import "../../styles/CountryNavCard.css"
import bangkok from "../../images/countryImages/bangkok-thailand.jpg"

function CountryNavCard({ country, continent, metrics }) {
  return (
    <div className="CountryNavCard">
        <div className="CountryNavCardTextContainer">
          <h1 className="NavCardCountryName">{country}</h1>
          <p className="NavCardCountryContinent">{continent}</p>
        </div>
        <img className="NavCardCountryImage" src={bangkok} />
    </div>
  );
}

export default CountryNavCard;