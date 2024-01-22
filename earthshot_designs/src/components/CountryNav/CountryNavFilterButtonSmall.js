import "../../styles/CountryNavFilterButton.css"

function CountryNavFilterButtonSmall({ text, filter, setFilter }) {
  return (
    <button className={filter === text ? "CountryFilterButtonSmallSelected" : "CountryFilterButtonSmall"} onClick={() => {
      setFilter(text)
    }}>{text}</button>
  );
}

export default CountryNavFilterButtonSmall;