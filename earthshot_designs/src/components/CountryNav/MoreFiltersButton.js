import "../../styles/MoreFiltersButton.css"
import Dropdown from "react-bootstrap/Dropdown"
import FilterOptions from "../../testdata/CountryNavPageFilterFunctions";

function MoreFiltersButton({ size, filter, setFilter }) {
  return (
    <Dropdown className={size === "normal" ? "MoreFiltersButton" : "MoreFiltersButtonSmall"}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        More Filters
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {
          Object.keys(FilterOptions).map((newFilterOption) => {
            if (FilterOptions[newFilterOption]["type"] === "filter"){
              return <Dropdown.Item className={newFilterOption === filter ? "DropdownItemSelected" : "DropdownItem"} onClick={() => newFilterOption === filter ? setFilter(null) : setFilter(newFilterOption)}>{FilterOptions[newFilterOption].name}</Dropdown.Item>
            } else if (FilterOptions[newFilterOption]["type"] === "header") {
              return <Dropdown.ItemText className="DropdownHeader">{FilterOptions[newFilterOption].name}</Dropdown.ItemText>
            }
          })
        }
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default MoreFiltersButton;