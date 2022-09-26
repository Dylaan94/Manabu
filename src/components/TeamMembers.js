import React from "react";
import styled from "styled-components";

//image imports
import Dylan from "../images/Dylan_Small.png";
import Karina from "../images/Karina_Small.png";
import Pablo from "../images/Pablo_Small.png";

// flag image imports
import canadaFlag from "../images/canadaFlag.svg";
import japanFlag from "../images/japanFlag.svg";
import indonesiaFlag from "../images/indonesiaFlag.svg";
import computer from "../images/computer.svg";
import manMeditating from "../images/manMeditating.svg";

export default function TeamMembers() {
  return (
    <Root>
      <TitleContainer>
        <Title>Our Global Team</Title>
      </TitleContainer>
      <MainContainer>
        <MemberSection id="karina-section">
          <Image src={Karina} />
          <Name>Karina Viella Darminto</Name>
          <Position>Digital Marketing Media Intern</Position>
          <Bio>
            Hi there! My name is Karina. I am a Sociology student and an
            aspiring UX/UI designer currently in between Japan, Indonesia, and
            Canada!
            <MultipleIcons>
              <IconImage src={indonesiaFlag} />
              <IconImage src={japanFlag} />
              <IconImage src={canadaFlag} />
            </MultipleIcons>
          </Bio>
        </MemberSection>
        <MemberSection id="pablo-section">
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

        <MemberSection id="dylan-section">
          <Image src={Dylan} />
          <Name> Dylan Brain</Name>
          <Position>Web Development Intern</Position>
          <Bio>
            Hey! I'm originally from the UK and I have over 5 years of
            experience working in Japan. I am currently studying for my Master's
            Degree in Computer Science <IconImage src={computer} />
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

  #karina-section {
    margin-top: 2vh;
  }

  #dylan-section {
    margin-top: 2vh;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    // maintains order when page resizes
    #pablo-section {
      order: 0;
    }

    #karina-section {
      order: 1;
      margin-top: 0;
    }

    #dylan-section {
      order: 2;
      margin-top: 0;
    }
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

const Bio = styled.p`
  display: flex;
  flex-direction: column;
`;

const MultipleIcons = styled.div`
  align-self: center;
`;

const IconImage = styled.img`
  height: 1.6em;
  align-self: center;
`;
