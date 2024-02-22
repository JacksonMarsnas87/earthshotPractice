import "../../styles/CountryNavFilterButton.css"

function CountryNavFilterButtonSmall({ text, filter, setFilter }) {
  return (
    <button className={filter === text ? "CountryFilterButtonSmallSelected" : "CountryFilterButtonSmall"} onClick={() => {
      if (filter !== text) {
        setFilter(text)
      } else {
        setFilter(null)
      }
    }}>{text}</button>
  );
}

export default CountryNavFilterButtonSmall;