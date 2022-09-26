import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

// component imports
import ContactList from "../components/ContactList";
import CustomButton from "../components/CustomButton";

// image imports
import IncomingMail from "../images/IncomingMail.svg";

export default function Contact() {
  return (
    <Layout>
      <Root>
        <LeftDiv>
          <img src={IncomingMail} />
        </LeftDiv>
        <RightDiv>
          <Title>Contact Us</Title>
          <SubText>
            Want to learn more about Manabu? We'd love to hear from you!
          </SubText>
          <ContactList />
          {/* <Newsletter>
            Want to keep up to date with Tsunagaru Edutech? Click below to sign
            up to our newsletter!
          </Newsletter> */}
        </RightDiv>
      </Root>
    </Layout>
  );
}

const Root = styled.div`
  display: flex;
  justify-content: center;

  animation: fadeIn 0.5s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
`;

const LeftDiv = styled.div`
  width: 40%;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin-bottom: 10vh;

  @media screen and (max-width: 480px) {
    width: 80%;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 0;
  font-size: 4em;
`;

const SubText = styled.h3`
  font-size: 1.8em;
  font-weight: 400;
  align-self: center;
  width: 80%;
  text-align: center;
`;

const Newsletter = styled.h3`
  width: 80%;
  text-align: center;
`;
