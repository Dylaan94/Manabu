import React from "react";
import styled from "styled-components";

// image imports
import thumbsup from "../images/thumbsup.png";
import woman from "../images/womanTechnologist.png";
import herb from "../images/herb.png";

export default function SellingPoint() {
  return (
    <MainContainer>
      <SectionContainer>
        <SectionTitle>
          <Image src={thumbsup} /> Simple
        </SectionTitle>
        <p>
          Lightweight, easy to use navigation with no unnecessary features.
          Meaning you can learn and study comfortably wherever you are. Uses
          powerful learning analytics and AI to predict learning best practices
          and save business operational costs!
        </p>
        <p>
          {" "}
          Tsunagaru Edutech is ISIT accredited and we recently became a member
          and graduated Amazon's AWS Edstart accelerator program. We are
          recognised as one of the most innovative Edtech startups in the Asia
          Pacific (by AWS).
        </p>
      </SectionContainer>
      <SectionContainer>
        <SectionTitle>
          <Image src={woman} /> Social
        </SectionTitle>
        <p>
          Manabu supports the corperate sector in delivering advanced remote
          training utilising the metaverse, and up-skilling workforces following
          a collective and social collaborative approach.
        </p>
        <p>
          Optional team leaderboards and point systems keeps you up to date with
          your colleagues progress, and can be used to showcase your progress as
          a company. Manabu can also be used to connect with your local
          community and learn together through Live Streaming integration.
        </p>
      </SectionContainer>
      <SectionContainer>
        <SectionTitle>
          <Image src={herb} /> Sustainable
        </SectionTitle>
        <p>
          Manabu is both SDG (Social Development Goals) and ESG (Environmental,
          Social, and Governance principles) aligned, meaning it can help you
          track and meet your sustainability commitments.
        </p>
        <p>
          Manabu rewards employees for engaging with sustainability and any
          impact they make in the community. Companies can save millions of
          operational costs using Manabu by obtaining key successs metrics.
        </p>
      </SectionContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 80%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  animation: fadeIn 2s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 90%;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SectionContainer = styled.div`
  height: auto;
  width: 32%;
  margin-top: 5vh;
  margin-bottom: 5vh;
  border-radius: 15px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
  background-color: white;

  p {
    margin: 30px;
    color: #212529;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
    align-self: center;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    align-self: center;
  }
`;

const SectionTitle = styled.h3`
  font-size: 24px;
  font-weight: 900;
  text-align: center;
  color: #212529;
  padding: 2vh;
  margin: 0;
`;

const Image = styled.img`
  height: 30px;
`;
