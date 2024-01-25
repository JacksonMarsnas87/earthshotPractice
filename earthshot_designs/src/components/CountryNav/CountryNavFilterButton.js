import "../../styles/CountryNavFilterButton.css"

function CountryNavFilterButton({ text, filter, setFilter }) {
  return (
    <button className={filter === text ? "CountryFilterButtonSelected" : "CountryFilterButton"} onClick={() => {
      if (filter !== text) {
        setFilter(text)
      } else {
        setFilter(null)
      }
    }}>{text}</button>
  );
}

export default CountryNavFilterButton;