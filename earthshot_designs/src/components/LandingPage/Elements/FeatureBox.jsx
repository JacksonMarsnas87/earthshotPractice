import React from "react";
import styled from "styled-components";
// Assets
import WarningIcon from "../../../images/landingImages/svg/Services/Warning";
import CategoriesIcon from "../../../images/landingImages/svg/Services/Categories";
import CountriesIcon from "../../../images/landingImages/svg/Services/Countries";
import StudiesIcon from "../../../images/landingImages/svg/Services/Studies";

export default function FeatureBox({icon, title, subtitle}) {
  let getIcon;

  switch (icon) {
    case "studies":
      getIcon = <StudiesIcon />
      break;
    case "countries":
      getIcon = <CountriesIcon />
      break;
    case "categories":
      getIcon = <CategoriesIcon />
      break;
    case "warning":
      getIcon = <WarningIcon />
      break;
    default:
      getIcon = <WarningIcon />;
      break;
  }


  return (
    <Wrapper className="flex flexColumn">
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font14">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;