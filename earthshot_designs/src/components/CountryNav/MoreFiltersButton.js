import "../../styles/MoreFiltersButton.css"

function MoreFiltersButton({ size }) {
  return (
    <button className={size === "normal" ? "MoreFiltersButton" : "MoreFiltersButtonSmall"}>More Filters</button>
  );
}

export default MoreFiltersButton;