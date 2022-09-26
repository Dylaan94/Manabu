import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

// component imports
import ContactList from "../components/ContactList";

// image imports
import IncomingMail from "../images/IncomingMail.svg";

export default function Contact() {
  return (
    <Layout>
      <Root>
        <LeftDiv>
          <SubText>Want to learn more about Manabu? Get in touch!</SubText>
          <img src={IncomingMail} />
        </LeftDiv>
        <RightDiv>
          <Title>Contact Us</Title>
          <ContactList />
          {/* <SubText>
            Want to keep up to date with Tsunagaru Edutech? Click below to sign
            up to our newsletter!
          </SubText> */}
        </RightDiv>
      </Root>
    </Layout>
  );
}

const Root = styled.div`
  display: flex;
`;

const LeftDiv = styled.div`
  width: 40%;
  background-color: #f8f9fa;
  /* color: #6e68f0; */
`;

const RightDiv = styled.div`
  width: 60%;
`;

const Title = styled.h2``;

const SubText = styled.h3`
  font-size: 2em;
  font-weight: 900;
`;
