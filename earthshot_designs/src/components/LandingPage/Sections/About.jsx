import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import FeatureBox from "../Elements/FeatureBox";

export default function About() {
  return (
    <Wrapper id="about">
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div>
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">What is the World's Biggest Problem Hub?</h1>
            <p className="font15">
              World's Biggest Problems Hub (WBP) visualizes root causes to global issues with problem profiles covering 195 countries; helping decision makers understand ripe opportunities for disruption, innovation & impact to help the underserved. Coverage on food & agriculture, healthcare, clean water & sanitation, energy, affordable quality housing, environment and economic prosperity.
              <br />
              <br />
              The United Nation’s Sustainable Development Goals are a set of 17 goals that were supposed to be solved by 2030, but experts forecast that these problems won’t be solved until 2090. The Earthshot Group has a goal in mind to change that forecast, with the World’s Biggest Problem Hub as a key piece of the solution, bringing awareness to major issues.
            </p>
          </HeaderInfo>
          <FeatureBoxRow className="flex">
            <FeatureBoxWrapper>
              <FeatureBox
                icon="warning"
                title="Raise awareness"
                subtitle="Our goal is to raise awareness for some of the world's biggest issues, such as energy and hunger."
              />
            </FeatureBoxWrapper>
            <FeatureBoxWrapper>
              <FeatureBox
                icon="categories"
                title="Problem categories"
                subtitle="We have split all of the world's issues into eight distinct categories, such as food, enviornmental, and energy, making specific types of problems easy to view."
              />
            </FeatureBoxWrapper>
            <FeatureBoxWrapper>
              <FeatureBox
                icon="countries"
                title="View countries"
                subtitle="We keep track of over 195 countries with dozens of different metrics in different categories, allowing you to compare the specific stats of different countries."
              />
            </FeatureBoxWrapper>
            <FeatureBoxWrapper>
              <FeatureBox icon="studies" title="Problem studies" subtitle="We have hundreds of specific studies relating to different problem categories, helping you to visualize how serious different problems are with real data." />
            </FeatureBoxWrapper>
          </FeatureBoxRow>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const FeatureBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const FeatureBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;