import "../../NavPage.css"
import CategoryButton from "./CategoryButton";
import NavCard from "./NavCard";
import { useState, useEffect } from "react";
import { BsFillHeartPulseFill } from "react-icons/bs";
import NavCardData from "../../testdata/NavCardData";

function NavPage() {

  const [category, setCategory] = useState("Poverty")
  const [data, setData] = useState(NavCardData)

  useEffect(() => {
    const filteredData = NavCardData.filter(cardData => category === "All" ? true : cardData.category === category)
    setData(filteredData)
  }, [category])

  const getColoursFromCategory = (cardCategory) => {
    switch(cardCategory) {
      case "Poverty":
        return {primary: "#FFA7A7", secondary: "#840000"}
      case "Economic":
        return {primary: "#95ECFF", secondary: "#007893"}
      default:
        return {primary: "#FFA7A7", secondary: "#840000"}
    }
  }

  return (
    <div className="NavContainer">
        <div className="HeaderContainer">
            <h1 className="NavHeader">The world's biggest problems, all in one place.</h1>

            <div className="ButtonContainer">
              <CategoryButton text="All" colour="#000000" category={category} setCategory={setCategory} />
              <CategoryButton text="Economic" colour="#00D1FF" category={category} setCategory={setCategory} />
              <CategoryButton text="Hunger" colour="#C70000" category={category} setCategory={setCategory} />
              <CategoryButton text="Education" colour="#FF00C7" category={category} setCategory={setCategory} />
              <CategoryButton text="Equality" colour="#D3D800" category={category} setCategory={setCategory} />
              <CategoryButton text="Energy" colour="#00FF29" category={category} setCategory={setCategory} />
              <CategoryButton text="Environmental" colour="#0FBC00" category={category} setCategory={setCategory} />
              <CategoryButton text="Peace & Justice" colour="#FF0000" category={category} setCategory={setCategory} />
              <CategoryButton text="Poverty" colour="#840000" category={category} setCategory={setCategory} />
            </div>
        </div>

        <div className="NavCardContainer">
          {
            data.map(cardData => (
              <NavCard icon={cardData.iconName} title={cardData.title} category={cardData.category} summary={cardData.summary} colourScheme={getColoursFromCategory(cardData.category)} />
            ))
          }

          {/* <NavCard icon={getIconFromName("heart")} title="Illness caused by industry" category="Poverty" summary="Many illnesses can be attributed to industries with poor safety standards. This is especially evident in poverty-stricken countries." colourScheme={getColoursFromCategory("Poverty")} />
          <NavCard icon={getIconFromName("heart")} title="Illness caused by industry" category="Poverty" summary="Many illnesses can be attributed to industries with poor safety standards. This is especially evident in poverty-stricken countries." colourScheme={getColoursFromCategory("Poverty")} />
          <NavCard icon={getIconFromName("heart")} title="Illness caused by industry" category="Poverty" summary="Many illnesses can be attributed to industries with poor safety standards. This is especially evident in poverty-stricken countries." colourScheme={getColoursFromCategory("Poverty")} />
          <NavCard icon={getIconFromName("heart")} title="Illness caused by industry" category="Poverty" summary="Many illnesses can be attributed to industries with poor safety standards. This is especially evident in poverty-stricken countries." colourScheme={getColoursFromCategory("Poverty")} /> */}
        </div>
    </div>
  );
}

export default NavPage;
