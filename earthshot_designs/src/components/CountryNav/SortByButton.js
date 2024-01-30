import "../../styles/SortByButton.css"
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from 'react-bootstrap/DropdownButton'
import SortOptions from "../../testdata/CountryNavPageSortOptions";

function SortByButton({ size, setSortOptions }) {
  return (
    // <button className={size === "normal" ? "SortByButton" : "SortByButtonSmall"}>Sort By</button>

    <Dropdown className="SortByButton">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Sort by
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {
          SortOptions.map((sortOption) => {
            return <Dropdown.Item onClick={() => setSortOptions(sortOption)}>{sortOption}</Dropdown.Item>
          })
        }
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SortByButton;