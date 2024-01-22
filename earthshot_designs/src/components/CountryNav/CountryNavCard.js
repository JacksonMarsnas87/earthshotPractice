import "../../styles/CountryNavCard.css"

function CountryNavCard({ country, continent, metrics }) {
  return (
    <div className="CountryNavCard">
        <h1 className="NavCardCountryName">{country}</h1>
        <p className="NavCardCountryContinent">{continent}</p>
    </div>
  );
}

export default CountryNavCard;