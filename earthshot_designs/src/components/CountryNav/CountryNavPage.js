import { useState, useEffect } from "react";
import "../../styles/CountryNavPage.css"
import CountryNavFilterButton from "./CountryNavFilterButton";
import CountryNavFilterButtonSmall from "./CountryNavFilterButtonSmall";
import MoreFiltersButton from "./MoreFiltersButton";
import SortByButton from "./SortByButton";
import CountryNavCard from "./CountryNavCard";
import TestDataNavCardCountry from "../../testdata/TestDataNavCardCountry";
import CountryNavCardRoutes from "../../api/CountryNavCardData";
import SortOptions from "../../testdata/CountryNavPageSortOptions";
import { useQuery } from "react-query";
import Modal from "./Modal";
import FilterOptions from "../../testdata/CountryNavPageFilterFunctions";

function CountryNavPage() {

  const { isLoading, error, data } = useQuery("countryNavCardData", CountryNavCardRoutes.getCountryNavCardData, { 
    staleTime: 10000,
    onSuccess: (resData) => {
      let modifiedData = resData.data
      if (filter) {
        modifiedData = FilterOptions[filter].filterFunction(modifiedData)
      }
      if (sortOptions) {
        modifiedData = sortOptions.sortFunction(modifiedData)
      }
      setCardData(modifiedData)
    }
  })

  const smallScreenSize = 820
  const mobileScreenSize = 500
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [filter, setFilter] = useState(null)
  const [sortOptions, setSortOptions] = useState(SortOptions[1])
  const [cardData, setCardData] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalData, setModalData] = useState(false)

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, [])

  useEffect(() => {
    if (data) {
      let modifiedData = data.data

      if (filter) {
        modifiedData = FilterOptions[filter].filterFunction(modifiedData)
      }

      if (sortOptions) {
        modifiedData = sortOptions.sortFunction(modifiedData)
      }

      setCardData(modifiedData)
    }
  }, [filter])

  useEffect(() => {
    if (data && sortOptions) {
      setCardData(sortOptions.sortFunction(cardData))
    }
  }, [sortOptions])

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h1>An error occurred</h1>

  return (
    <>
      {
        windowWidth >= smallScreenSize ?

        <div className="CountryNavContainer">

          <Modal isModalOpen={isModalOpen} modalData={modalData} size={"normal"} />
          <div className={isModalOpen ? "ModalBackgroundOpen" : "ModalBackgroundClosed"} onClick={() => setIsModalOpen(false)} />

          <div className="CountryNavHeaderContainer">
            <h1 className="CountryNavHeader">This is the page title!</h1>
            <p className="CountryNavSummary">There are a few metrics used to describe the United Nation’s Least Developed Countries. While every country has its unique challenges, these metrics are common indicators that help may be needed.</p>
          </div>

          <div className="CountryNavFilterContainer">
            <div className="MoreFiltersContainer">
              <MoreFiltersButton size="normal" filter={filter} setFilter={setFilter} />
              <SortByButton size="normal" sortOptions={sortOptions} setSortOptions={setSortOptions} />
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
            {
              cardData.length ?

              cardData.map((navCardData, index) => (
                <CountryNavCard details={navCardData} metrics={navCardData.metrics} ranking={index + 1} setIsModalOpen={setIsModalOpen} setModalData={setModalData} />
              ))

              :

              <div className="NoData">
                <p>There is no data to display at this time</p>
              </div>
            }
          </div>
        </div>

        :

        <div className="CountryNavContainer">

          <Modal isModalOpen={isModalOpen} modalData={modalData} size={windowWidth > mobileScreenSize ? "small" : "mobile"}  />
          <div className={isModalOpen ? "ModalBackgroundOpen" : "ModalBackgroundClosed"} onClick={() => setIsModalOpen(false)} />

          <div className="CountryNavHeaderContainerSmall">
            <h1 className="CountryNavHeaderSmall">This is the page title!</h1>
            <p className="CountryNavSummarySmall">There are a few metrics used to describe the United Nation’s Least Developed Countries. While every country has its unique challenges, these metrics are common indicators that help may be needed.</p>
          </div>

          <div className="CountryNavFilterContainerSmall">
            <div className="MoreFiltersContainerSmall">
              <MoreFiltersButton size="small" filter={filter} setFilter={setFilter} />
              <SortByButton size="small" sortOptions={sortOptions} setSortOptions={setSortOptions} />
            </div>
            <div className="CountryNavFilterInnerContainerSmall">
              <CountryNavFilterButtonSmall text="North America" filter={filter} setFilter={setFilter} />
              <CountryNavFilterButtonSmall text="South America" filter={filter} setFilter={setFilter} />
              <CountryNavFilterButtonSmall text="Europe" filter={filter} setFilter={setFilter} />
              <CountryNavFilterButtonSmall text="Africa" filter={filter} setFilter={setFilter} />
              <CountryNavFilterButtonSmall text="Asia" filter={filter} setFilter={setFilter} />
              <CountryNavFilterButtonSmall text="Oceania" filter={filter} setFilter={setFilter} />
            </div>
          </div>

          <div className="CountryNavCardContainerSmall">
            {
              cardData.length ?

              cardData.map((navCardData, index) => (
                <CountryNavCard details={navCardData} metrics={navCardData.metrics} ranking={index + 1} setIsModalOpen={setIsModalOpen} setModalData={setModalData} />
              ))

              :

              <div className="NoDataSmall">
                <p>There is no data to display at this time</p>
              </div>
            }
          </div>
        </div>
      }
    </>
  );
}

export default CountryNavPage;