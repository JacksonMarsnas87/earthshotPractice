import { useState, useEffect } from "react";
import "../../styles/CountryNavPage.css"
import CountryNavFilterButton from "./CountryNavFilterButton";
import MoreFiltersButton from "./MoreFiltersButton";
import SortByButton from "./SortByButton";
import CountryNavCard from "./CountryNavCard";

function CountryNavPage() {

  const smallScreenSize = 820
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [filter, setFilter] = useState(null)

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, [])

  return (
    <>
      {
        windowWidth >= smallScreenSize ?

        <div className="CountryNavContainer">
          <div className="CountryNavHeaderContainer">
            <h1 className="CountryNavHeader">This is the page title!</h1>
            <p className="CountryNavSummary">There are a few metrics used to describe the United Nation’s Least Developed Countries. While every country has its unique challenges, these metrics are common indicators that help may be needed.</p>
          </div>

          <div className="CountryNavFilterContainer">
            <div className="MoreFiltersContainer">
              <MoreFiltersButton />
              <SortByButton />
            </div>
            <div className="CountryNavFilterInnerContainer">
              <CountryNavFilterButton text="North America" filter={filter} setFilter={setFilter} />
              <CountryNavFilterButton text="South America" filter={filter} setFilter={setFilter} />
              <CountryNavFilterButton text="Europe" filter={filter} setFilter={setFilter} />
              <CountryNavFilterButton text="Africa" filter={filter} setFilter={setFilter} />
              <CountryNavFilterButton text="Asia" filter={filter} setFilter={setFilter} />
              <CountryNavFilterButton text="Oceania" filter={filter} setFilter={setFilter} />
            </div>
          </div>

          <div className="CountryNavCardContainer">
            <CountryNavCard country="Kenya" continent="Africa" metrics={null} />
          </div>
        </div>

        :

        <div className="CountryNavContainer">
          <div className="CountryNavHeaderContainerSmall">
            <h1 className="CountryNavHeaderSmall">This is the page title!</h1>
            <p className="CountryNavSummarySmall">There are a few metrics used to describe the United Nation’s Least Developed Countries. While every country has its unique challenges, these metrics are common indicators that help may be needed.</p>
          </div>

          <div className="CountryNavFilterContainer">
            <div className="MoreFiltersContainer">
              <MoreFiltersButton />
              <SortByButton />
            </div>
            <div className="CountryNavFilterInnerContainer">
              <CountryNavFilterButton text="North America" filter={filter} setFilter={setFilter} />
              <CountryNavFilterButton text="South America" filter={filter} setFilter={setFilter} />
              <CountryNavFilterButton text="Europe" filter={filter} setFilter={setFilter} />
              <CountryNavFilterButton text="Africa" filter={filter} setFilter={setFilter} />
              <CountryNavFilterButton text="Asia" filter={filter} setFilter={setFilter} />
              <CountryNavFilterButton text="Oceania" filter={filter} setFilter={setFilter} />
            </div>
          </div>

          <div className="CountryNavCardContainer">
            <CountryNavCard country="Kenya" continent="Africa" metrics={null} />
          </div>
        </div>
      }
    </>
  );
}

export default CountryNavPage;