import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import landingCategoriesImage from "../../../images/landingImages/landing_categories.png";
import studyMobileView from "../../../images/landingImages/study_mobile_view.png";
import logo from "../../../images/landingImages/logo.png";
import studyDesktopView from "../../../images/landingImages/study_desktop_view.png";

export default function Studies() {
  const navigate = useNavigate()
  
  return (
    <Wrapper id="studies">
        <div className="lightBlueBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <Left>
                <h4 className="font15 semiBold">Specific, real-world studies regarding major issues</h4>
                <h2 className="font40 extraBold">Our Problem Studies</h2>
                <p className="font14">
                  We split problems into eight different categories for easier viewing and comparison within categories. Each category is filled with studies
                  relating to real-world issues. Each study has data visualizations and figures to help visualize how dire each situation truly is.
                </p>
                <div className="flexCenter" style={{ margin: "30px 0"}}>
                  <div style={{ width: "190px" }}>
                    <FullButton title="View Categories" action={() => navigate("/nav")} />
                  </div>
                </div>
              </Left>
              <Right>
                <RightInner>
                  <div className="flexNullCenter">
                    <ImageWrapper1 className="flexCenter">
                      <img src={landingCategoriesImage} alt="category" />
                    </ImageWrapper1>
                    <ImageWrapper2>
                      <img src={studyMobileView} alt="category" />
                    </ImageWrapper2>
                  </div>
                  <div className="flexNullCenter">
                    <ImageWrapper3>
                      <img src={logo} alt="category" />
                    </ImageWrapper3>
                    <ImageWrapper4>
                      <img src={studyDesktopView} alt="category" />
                    </ImageWrapper4>
                  </div>
                </RightInner>
              </Right>
            </Advertising>
          </div>
        </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  margin-bottom: 80px;
`;
const Advertising = styled.div`
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const Left = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const Right = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const RightInner = styled.div`
  width: 100%;
`;
const ImageWrapper1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const ImageWrapper2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
  }
`;
const ImageWrapper3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
  }
`;
const ImageWrapper4 = styled.div`
  width: 40%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;