import React from "react";
import styled from "styled-components";
// Components
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Testiomonials() {
  return (
    <Wrapper id="testimonials">
      <div className="whiteBg" style={{padding: '50px 0'}}>
        <div className="container" style={{"width": "calc(100% - 50px)"}}>
          <HeaderInfo>
            <h1 className="font40 extraBold">What Our Partners Are Saying</h1>
            <p className="font15">
              We have a number of high-profile partners supporting our cause of bringing awareness to the world's biggest problems.
              <br />
              Here is what they have to say about us!
            </p>
          </HeaderInfo>
         <TestimonialSlider />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;