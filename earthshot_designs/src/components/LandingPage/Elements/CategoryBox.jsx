import React from "react";
import styled from "styled-components";

export default function CategoryBox({ title, text, colour, icon }) {
  return (
    <Wrapper colour={colour}>
      <>{icon}</>
      <h3 className="font20 extraBold">{title}</h3>
      <p className="font14">{text}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 30px;
  border: 2px solid ${(props) => (props.colour ? props.colour : "#000000")};
  border-radius: 1rem;
  background-color: ${(props) => (props.colour ? props.colour + "20" : "#ffffff")};
  div {
    width: 100%;
    height: auto;
    margin: 20px 0;
  }
  h3 {
    padding-bottom: 10px;
  }
`;