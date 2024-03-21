import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import CountryNavMetrics from "../../../images/landingImages/country_nav_metrics.png";

export default function Metrics() {
  const navigate = useNavigate()

  return (
    <Wrapper id="metrics">
      <div className="lightBlueBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <Left>
              <LeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={CountryNavMetrics} alt="country metrics" />
                </ImgWrapper>
              </LeftInner>
            </Left>
            <Right>
              <h4 className="font16 semiBold">Tracking key metrics accross different categories in countries that are suffering</h4>
              <h2 className="font40 extraBold">Country Metric Tracking</h2>
              <p className="font15">
                We track dozens of different metrics across multiple different categories, such as agriculture and energy. Our goal is to make it easy 
                to compare the countries that are suffering and bring attention to those that need help the most.
              </p>
              <div className="flexCenter" style={{ margin: "30px 0" }}>
                <div style={{ width: "190px" }}>
                  <FullButton title="View Country Metrics" action={() => navigate("/countries")} />
                </div>
              </div>
            </Right>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const Left = styled.div`
  position: relative;
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
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const LeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;