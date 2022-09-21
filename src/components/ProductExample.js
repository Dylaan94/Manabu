import React from "react";
import styled from "styled-components";

//image imports
import MainScreen from "../images/mainPageSmall.png";

export default function ProductExample() {
  return (
    <MainContainer>
      <Image src={MainScreen} />
    </MainContainer>
  );
}

const MainContainer = styled.div`
display: flex;
justify-content: center;
  margin-top: 5vh;
  margin-bottom: 5vh;
`;

const Image = styled.img`
  border-radius: 25px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  width: 50vw;

  @media screen and (max-width: 1024px) {
    width: 80%;
  }
`;
