import "../../styles/CountryNavCard.css"
import bangkok from "../../images/countryImages/bangkok-thailand.jpg"

function CountryNavCard({ country, continent, metrics, imageName }) {
  return (
    <div className="CountryNavCard">
        <div className="CountryNavCardTextContainer">
          <h1 className="NavCardCountryName">{country}</h1>
          <p className="NavCardCountryContinent">{continent}</p>
        </div>
        <img className="NavCardCountryImage" src={require(`../../images/countryImages/${imageName}.jpg`)} />
    </div>
  );
}

export default CountryNavCard;