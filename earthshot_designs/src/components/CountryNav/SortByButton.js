import "../../styles/SortByButton.css"

function SortByButton({ size }) {
  return (
    <button className={size === "normal" ? "SortByButton" : "SortByButtonSmall"}>Sort By</button>
  );
}

export default SortByButton;