import "../../styles/CountryNavFilterButton.css"

function CountryNavFilterButton({ text, filter, setFilter }) {
  return (
    <button className={filter === text ? "CountryFilterButtonSelected" : "CountryFilterButton"} onClick={() => {
      setFilter(text)
    }}>{text}</button>
  );
}

export default CountryNavFilterButton;