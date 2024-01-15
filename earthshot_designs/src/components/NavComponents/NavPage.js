import "../../styles/NavPage.css"
import CategoryButton from "./CategoryButton";
import NavCard from "./NavCard";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CategoryContext } from "../../helpers/CategoryContext";
import NavCardRoutes from "../../api/NavCardData";
import { useQuery } from "react-query";

function NavPage() {

  // useQuery caches the nav card data from the API. This way the page doesn't have to retrieve he data on navigation, which gives it a "choppy" loading effect
  const { isLoading, error, data } = useQuery("navCardData", NavCardRoutes.getNavCardData, { 
    staleTime: 10000,
    onSuccess: (resData) => {
      const filteredData = resData.data.filter(cardData => category === "All" ? true : cardData.category === category)
      setFilteredNavCardData(filteredData)
    }
   })
  const {category, setCategory, filteredNavCardData, setFilteredNavCardData} = useContext(CategoryContext)

  useEffect(() => {
    if (data) {
      const filteredData = data.data.filter(cardData => category === "All" ? true : cardData.category === category)
      setFilteredNavCardData(filteredData)
    }
  }, [category])

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <h1>An error occurred</h1>

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
            filteredNavCardData.length > 0 ?

            filteredNavCardData.map(cardData => (
              <Link className="CardLink" to={`problemProfile/${cardData.problemNumber}`} style={{textDecoration: "none", color: "#000"}}>
                <NavCard iconName={cardData.iconName} title={cardData.title} category={cardData.category} summary={cardData.summary} colourScheme={getColoursFromCategory(cardData.category)} />
              </Link>
            ))

            :

            <h1>Loading...</h1>
          }
        </div>
    </div>
  );
}

export default NavPage;
