import React from "react";
import styled from "styled-components";

//image imports

import Dylan from "../images/Dylan_Small.png";
import Karina from "../images/Karina_Small.png";
import Pablo from "../images/Pablo_Small.png";

export default function TeamMembers() {
  return (
    <Container>
      <MemberSection>
        <Image src={Pablo} />
        <Name> Pablo Riveros</Name>
        <Position>CEO, Founder</Position>
        <Bio></Bio>
      </MemberSection>
      <MemberSection>
        <Image src={Karina} />
        <Name>Karina Viella Darminto</Name>
        <Position>Digital Marketing Media Intern</Position>
        <Bio>
          Hi there! My name is Karina. I am a Sociology student and an aspiring
          UX/UI designer currently in between
        </Bio>
      </MemberSection>
      <MemberSection>
        <Image src={Dylan} />
        <Name> Dylan Brain</Name>
        <Position>Web Development Intern</Position>
        <Bio>
          Hey! I'm originally from the UK and I have over 5 years of experience
          working in Japan. I am currently studying for my Master's Degree in
          Computer Science.
        </Bio>
      </MemberSection>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

const MemberSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 25%;
`;

const Image = styled.img`
  width: 60%;
  max-width: 200px;
  border-radius: 30px;
  box-shadow: 0 3px 3px rgba(0, 0, 0.2, 0.2);
`;

const Name = styled.h3`
  margin: 0;
  padding: 0;
  font-weight: 900;
  font-size: 1.3em;
`;

const Position = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 900;
  color: #6e68f0;
  font-size: 1.1em;
`;

const Bio = styled.p``;
