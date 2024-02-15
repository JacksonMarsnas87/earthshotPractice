import "../../styles/SortByButton.css"
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from 'react-bootstrap/DropdownButton'
import SortOptions from "../../testdata/CountryNavPageSortOptions";

function SortByButton({ size, sortOptions, setSortOptions }) {
  return (
    <Dropdown className={size === "normal" ? "SortByButton" : "SortByButtonSmall"}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Sort by
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {
          SortOptions.map((sortOption) => {
            if (sortOption["type"] === "sort"){
              return <Dropdown.Item className={sortOptions === sortOption ? "DropdownItemSelected" : "DropdownItem"} onClick={() => setSortOptions(sortOption)}>{sortOption.name}</Dropdown.Item>
            } else if (sortOption["type"] === "header") {
              return <Dropdown.ItemText className="DropdownHeader">{sortOption.name}</Dropdown.ItemText>
            }
          })
        }
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SortByButton;