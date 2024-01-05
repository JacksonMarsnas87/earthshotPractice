import "../../NavPage.css"
import CategoryButton from "./CategoryButton";
import NavCard from "./NavCard";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import NavCardData from "../../testdata/NavCardData";
import { CategoryContext } from "../../helpers/CategoryContext";

function NavPage() {

  // Category has to be set globally in order for it to maintain between route switches
  // data and setData should be in the useContext as well. As of right now, they are "reset" whenever the page re-renders. This would be expensive if we were getting this info from an API
  // I'm not sure if there is a better way to do this. This feels bad, but it is the best solution I could find to maintain filter state between routes
  // const [category, setCategory] = useState("All")
  // const [data, setData] = useState(NavCardData)
  const {category, setCategory, data, setData} = useContext(CategoryContext)

  useEffect(() => {
    const filteredData = NavCardData.filter(cardData => category === "All" ? true : cardData.category === category)
    setData(filteredData)
  }, [category])

  const getColoursFromCategory = (cardCategory) => {
    switch(cardCategory) {
      case "Poverty":
        return {primary: "#ffb0b0", secondary: "#ff0000"}
      case "Economic":
        return {primary: "#c2ffad", secondary: "#37db00"}
      case "Hunger":
        return {primary: "#ffbff8", secondary: "#c400ad"}
      case "Education":
        return {primary: "#efffb5", secondary: "#94bd00"}
      case "Equality":
        return {primary: "#d6a1ff", secondary: "#7c00db"}
      case "Energy":
        return {primary: "#adf9ff", secondary: "#00b0bd"}
      case "Environmental":
        return {primary: "#c2c8ff", secondary: "#0015d6"}
      case "Peace & Justice":
        return {primary: "#ffecb8", secondary: "#d69d00"}
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
              <CategoryButton text="Economic" colour="#37db00" category={category} setCategory={setCategory} />
              <CategoryButton text="Hunger" colour="#c400ad" category={category} setCategory={setCategory} />
              <CategoryButton text="Education" colour="#94bd00" category={category} setCategory={setCategory} />
              <CategoryButton text="Equality" colour="#7c00db" category={category} setCategory={setCategory} />
              <CategoryButton text="Energy" colour="#00b0bd" category={category} setCategory={setCategory} />
              <CategoryButton text="Environmental" colour="#0015d6" category={category} setCategory={setCategory} />
              <CategoryButton text="Peace & Justice" colour="#d69d00" category={category} setCategory={setCategory} />
              <CategoryButton text="Poverty" colour="#ff0000" category={category} setCategory={setCategory} />
            </div>
        </div>

        <div className="NavCardContainer">
          {
            data.map(cardData => (
              <Link className="CardLink" to={`problemProfile/${cardData.problemNumber}`} style={{textDecoration: "none", color: "#000"}}>
                <NavCard iconName={cardData.iconName} title={cardData.title} category={cardData.category} summary={cardData.summary} colourScheme={getColoursFromCategory(cardData.category)} />
              </Link>
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
