import React from "react";
import styled from "styled-components";

//image imports
import Dylan from "../images/Dylan_Small.png";
import Karina from "../images/Karina_Small.png";
import Pablo from "../images/Pablo_Small.png";

// flag image imports
import canadaFlag from "../images/canadaFlag.png";
import japanFlag from "../images/japanFlag.png";
import indonesiaFlag from "../images/indonesiaFlag.png";
import manTechnologist from "../images/manTechnologist.png";
import manMeditating from "../images/manMeditating.png";

export default function TeamMembers() {
  return (
    <Root>
      <TitleContainer>
        <Title>Our Global Team</Title>
      </TitleContainer>
      <MainContainer>
        <MemberSection>
          <Image src={Karina} />
          <Name>Karina Viella Darminto</Name>
          <Position>Digital Marketing Media Intern</Position>
          <Bio>
            Hi there! My name is Karina. I am a Sociology student and an
            aspiring UX/UI designer currently in between{" "}
            <IconImage src={indonesiaFlag} /> <IconImage src={japanFlag} />{" "}
            <IconImage src={canadaFlag} />
          </Bio>
        </MemberSection>
        <MemberSection>
          <Image src={Pablo} />
          <Name> Pablo Riveros</Name>
          <Position>CEO, Founder</Position>
          <Bio>
            I have over 15 years of expertise in digital learning-edtech,
            academia and in the corporate sector. I have completed
            industry-academic research with Kyushu University (Japan) University
            of Queensland (Australia) among others. I love to run and practice
            zazen meditation <IconImage src={manMeditating} />
          </Bio>
        </MemberSection>

        <MemberSection>
          <Image src={Dylan} />
          <Name> Dylan Brain</Name>
          <Position>Web Development Intern</Position>
          <Bio>
            Hey! I'm originally from the UK and I have over 5 years of
            experience working in Japan. I am currently studying for my Master's
            Degree in Computer Science <IconImage src={manTechnologist} />
          </Bio>
        </MemberSection>
      </MainContainer>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  align-self: center;
  font-size: 1.5em;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.h2``;

const MemberSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 25%;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

const Image = styled.img`
  width: 60%;
  max-width: 200px;
  border-radius: 30px;
  box-shadow: 0 3px 3px rgba(0, 0, 0.2, 0.2);
`;

const Name = styled.h3`
  margin: 10px 0;
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

const IconImage = styled.img`
  height: 1.4em;
`;
