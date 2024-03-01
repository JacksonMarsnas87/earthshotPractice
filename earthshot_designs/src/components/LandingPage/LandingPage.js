import "../../styles/LandingPage.css"
import { useState, useEffect } from "react";
import ProblemCategory from "./ProblemCategory";
import { GiFarmTractor } from "react-icons/gi";
import { BiWorld } from "react-icons/bi";
import { BsHeartPulseFill, BsDropletFill, BsFillLightningChargeFill, BsFillHouseDoorFill, BsCurrencyDollar } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function LandingPage() {

    const navigate = useNavigate()
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    }, [])
    
    return (
        <div className="LandingPageBackground">
            <div className="LandingHeader">
                <div className="LandingHeaderPictureSection">
                    <img className="LandingHeaderPicture" src={require(`../../images/landingPictures/header_picture-portrait.png`)} />
                </div>

                <div className="LandingHeaderTitle">
                    <div>
                        <h1 className="LandingHeaderTitleText">The World's Biggest Problem Hub</h1>
                        <h1 className="LandingHeaderTitleSubText">The world's biggest problems.</h1>
                        <h1 className="LandingHeaderTitleSubText">All in one place.</h1>
                    </div>
                </div>
            </div>

            <div className="LandingAbout">
                <h1 className="LandingAboutTitle">What is the World's Biggest Problem Hub?</h1>
                <p className="LandingAboutText">World's Biggest Problems Hub (WBP) visualizes root causes to global issues with problem profiles covering 195 countries; helping decision makers understand ripe opportunities for disruption, innovation & impact to help the underserved. Coverage on food & agriculture, healthcare, clean water & sanitation, energy, affordable quality housing, environment and economic prosperity.</p>
                <p className="LandingAboutText">The United Nation’s Sustainable Development Goals are a set of 17 goals that were supposed to be solved by 2030, but experts forecast that these problems won’t be solved until 2090. The Earthshot Group has a goal in mind to change that forecast, with the World’s Biggest Problem Hub as a key piece of the solution, bringing awareness to major issues.</p>
            </div>

            <div className="LandingPurpose">
                <div className="LandingPurposeText">
                    <div>
                        <h1 className="LandingPurposeHeader">What does the World's Biggest Problem Hub do?</h1>
                        <ul className="LandingPurposeList">
                            <li className="LandingPurposeListItem">Bring attention to major issues in the world today</li>
                            <p className="LandingPurposeListSubitem">View the world’s biggest issues, such as hunger, energy, and housing</p>
                            <li className="LandingPurposeListItem">We look into specific cases relating to major world issues</li>
                            <p className="LandingPurposeListSubitem">See quantifiable, real-world examples relating to different categories. We parse the data and make it easy to read, adding visualizations to make issues easier to understand</p>
                            <li className="LandingPurposeListItem">View and organize over 195 countries with hundreds of different metrics</li>
                            <p className="LandingPurposeListSubitem">We keep track of hundreds of metrics across categories such as Food and Energy, allowing you to sort through countries while focusing on those struggling with specific issues</p>
                        </ul>
                    </div>
                </div>

                <div className="LandingPurposePictureSection">
                    <div>
                        <img className="LandingPurposePicture" src={require(`../../images/landingPictures/landing_purpose_picture.jpg`)} />
                    </div>
                </div>
            </div>

            <div className="LandingCategories">
                <h1 className="LandingCategoriesHeader">Our Problem Categories</h1>
                <p className="LandingCategoriesText">We organize problems into seven different categories, ranging from food & agriculture to the global energy crisis. Each category is just as important as every other category, and some problems may even fit into multiple categories. By organizing problems like this, we can attach real-world issues and studies to different categories and suggest solutions to them.</p>
                <div className="LandingCategoryCardContainer">
                    <ProblemCategory title={"Food & Agriculture"} icon={<GiFarmTractor className="LandingPageIcon" />} text={"We produce enough food to feed 10B people, yet 1 in 9 still go to bed hungry every night. 150M under 5 are stunted by malnutrition with long-term effects."} />
                    <ProblemCategory title={"Healthcare"} icon={<BsHeartPulseFill className="LandingPageIcon" />} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."} />
                    <ProblemCategory title={"Water Access"} icon={<BsDropletFill className="LandingPageIcon" />} text={"1.8B live in countries with absolute water scarcity. 80% of illnesses in the developing world are linked to inadequate water & sanitation."} />
                    <ProblemCategory title={"Energy"} icon={<BsFillLightningChargeFill className="LandingPageIcon" />} text={"570M lack access to energy. Millions more can’t afford such a univeral basic need, since the levelized cost of energy is too high relative to their income."} />
                    <ProblemCategory title={"Housing"} icon={<BsFillHouseDoorFill className="LandingPageIcon" />} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."} />
                    <ProblemCategory title={"Environmental"} icon={<BiWorld className="LandingPageIcon" />} text={"We emit 50 billion metric tonnes of CO2e in excess greenhouse gas emissions every year. This # climbs higher every single day."} />
                    <ProblemCategory title={"Economic Prosperity"} icon={<BsCurrencyDollar className="LandingPageIcon" />} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."} />
                </div>
            </div>

            <div className="LandingFeatures">
                <div className="LandingFeaturesCategories">
                    <div>
                        <div className="FadeLeft" />
                        <img className="LandingFeaturesBackground" src={require(`../../images/landingPictures/landing_categories.jpg`)} />
                        <div className="LandingFeaturesTextContainer">
                            <h1 className="LandingFeaturesHeader">Problem Categories</h1>
                            <p className="LandingFeaturesText">We organize problems into umbrella categories, such as food or energy. Those categories are then split into smaller sub-categories, which each have specific, real-world stories associated with them.</p>
                            <div className="LandingFeaturesButtonContainer">
                                <button className="LandingFeaturesButton" onClick={() => navigate("/nav")}>Explore our problem categories</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="LandingFeaturesCountries">
                    <div>
                        <div className="FadeRight" />
                        <img className="LandingFeaturesBackground" src={require(`../../images/landingPictures/landing_purpose_picture.jpg`)} />
                        <div className="LandingFeaturesTextContainer">
                            <h1 className="LandingFeaturesHeader">Country Metric Tracking</h1>
                            <p className="LandingFeaturesText">We keep track of hundreds of metrics associated with over 195 countries, making it easy to compare countries against each other and see which ones are struggling the most.</p>
                            <div className="LandingFeaturesButtonContainer">
                                <button className="LandingFeaturesButton" onClick={() => navigate("/countries")}>Explore different countries</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default LandingPage;
