import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// Components
import CategoryBox from "../Elements/CategoryBox";
import FullButton from "../Buttons/FullButton";

// Icons
import { GiFarmTractor, GiScales, GiPeaceDove } from "react-icons/gi";
import { BiWorld } from "react-icons/bi";
import { BsFillLightningChargeFill, BsFillHouseDoorFill, BsCurrencyDollar, BsBook } from "react-icons/bs";

export default function Categories() {
  const navigate = useNavigate()

  return (
    <Wrapper id="categories">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Problem Categories</h1>
            <p className="font15">
              Our problem profiles are heavily researched and sourced from reliable sources. For easy viewing, problems are separated into eight distinct categories.
              <br />
              Each category contains studies relating to that specific category. Each study has data visualizations to help you understand the true scale of the problem.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <CategoryBoxContainer className="col-xs-6 col-sm-5 col-md-5 col-lg-3">
              <CategoryBox
                title="Economic Prosperity"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                icon={<BsCurrencyDollar className="category-icon" />}
                colour="#37db00"
              />
            </CategoryBoxContainer>
            <CategoryBoxContainer className="col-xs-6 col-sm-5 col-md-5 col-lg-3">
              <CategoryBox
                title="Hunger and Agriculture"
                text="We produce enough food to feed 10B people, yet 1 in 9 still go to bed hungry every night. 150M under 5 are stunted by malnutrition with long-term effects."
                icon={<GiFarmTractor className="category-icon" />}
                colour="#c400ad"
              />
            </CategoryBoxContainer>
            <CategoryBoxContainer className="col-xs-6 col-sm-5 col-md-5 col-lg-3">
              <CategoryBox
                title="Education"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                icon={<BsBook className="category-icon" />}
                colour="#94bd00"
              />
            </CategoryBoxContainer>
            <CategoryBoxContainer className="col-xs-6 col-sm-5 col-md-5 col-lg-3">
              <CategoryBox
                title="Equality"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                icon={<GiScales className="category-icon" />}
                colour="#7c00db"
              />
            </CategoryBoxContainer>
          </div>
          <div className="row textCenter">
            <CategoryBoxContainer className="col-xs-6 col-sm-5 col-md-5 col-lg-3">
              <CategoryBox
                title="Energy"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                icon={<BsFillLightningChargeFill className="category-icon" />}
                colour="#00b0bd"
              />
            </CategoryBoxContainer>
            <CategoryBoxContainer className="col-xs-6 col-sm-5 col-md-5 col-lg-3">
              <CategoryBox
                title="Environmental"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                icon={<BiWorld className="category-icon" />}
                colour="#0015d6"
              />
            </CategoryBoxContainer>
            <CategoryBoxContainer className="col-xs-6 col-sm-5 col-md-5 col-lg-3">
              <CategoryBox
                title="Peace & Justice"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                icon={<GiPeaceDove className="category-icon" />}
                colour="#d69d00"
              />
            </CategoryBoxContainer>
            <CategoryBoxContainer className="col-xs-6 col-sm-5 col-md-5 col-lg-3">
              <CategoryBox
                title="Poverty"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                icon={<BsFillHouseDoorFill className="category-icon" />}
                colour="#840000"
              />
            </CategoryBoxContainer>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="View Problem Profiles" action={() => navigate("/nav")} />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const CategoryBoxContainer = styled.div`
  margin-bottom: 50px;
`;
