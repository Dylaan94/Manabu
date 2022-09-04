import * as React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

// image imports
import thumbsup from "../images/thumbsup.png";
import woman from "../images/womanTechnologist.png";
import herb from "../images/herb.png";
import tsunagaruLogo from "../images/tsunagaruLogoNoBG.svg";
import CustomButton from "../components/CustomButton";

const IndexPage = () => {
  return (
    <Layout>
      <MainContainer>
        <Container>
          <LogoDiv>
            <Logo src={tsunagaruLogo} />
            <SubTitle>Tsunagaru Edutech</SubTitle>
          </LogoDiv>
          <Title>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("Hello, Manabu").start();
              }}
            />
          </Title>
          <p>
            Manabu is{" "}
            <a href="https://tsunagaru-edutech.com">Tsunagaru Edutech's</a>{" "}
            latest innovation. A next generation DX Virtual Learning Ecosystem
            (VLE) focused on social, team-based learning
          </p>
          <ButtonDiv>
            <CustomButton text="About Us" border="black" link="/about" />
            <CustomButton
              text="Stay Updated"
              border="#6e68f0"
              bgColor="#6e68f0"
              textColor="white"
            />
          </ButtonDiv>
        </Container>

        <GreyWrapper>
          <SellingPointContainer>
            <SectionContainer>
              <SectionTitle>
                <Image src={thumbsup} /> Simple
              </SectionTitle>
            </SectionContainer>
            <SectionContainer>
              <SectionTitle>
                <Image src={woman} /> Social
              </SectionTitle>
            </SectionContainer>
            <SectionContainer>
              <SectionTitle>
                <Image src={herb} /> Sustainable
              </SectionTitle>
            </SectionContainer>
          </SellingPointContainer>
        </GreyWrapper>
      </MainContainer>
    </Layout>
  );
};

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 5.3rem;
  font-weight: 900;
  margin-top: 0;
  margin-bottom: 0;
`;

const SubTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: #6c757d;
  animation: fadeIn 1s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const LogoDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  height: 30px;
  text-shadow: 0 0 10px black;
  animation: fadeIn 1s;
  margin-right: 10px;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Container = styled.div`
  margin-top: 10vh;
  width: 50%;
  max-width: 80%;
  text-align: center;

  p {
    animation: fadeIn 1s;
    margin-top: 2vh;
    font-size: 1em;

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }

  a {
    font-weight: 900;
    font-size: 18px;
    color: black;
  }
`;

const ButtonDiv = styled.div`
  margin-top: 10vh;
  margin-bottom: 10vh;
`;

const GreyWrapper = styled.div`
  width: 100%;
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
`;

const SellingPointContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const SectionContainer = styled.div`
  height: auto;
  width: 33%;
  margin-top: 5vh;
  border-radius: 20px;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
  background-color: white;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

const SectionTitle = styled.h3`
  font-size: 24px;
  font-weight: 900;
  text-align: center;
  padding: 1vh;
  margin: 0;
`;

const Image = styled.img`
  height: 30px;
`;

export default IndexPage;

export const Head = () => <title>Product Page</title>;
