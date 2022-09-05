import * as React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import { navigate } from "gatsby";

// image imports
import thumbsup from "../images/thumbsup.png";
import woman from "../images/womanTechnologist.png";
import herb from "../images/herb.png";
import tsunagaruLogo from "../images/tsunagaruLogoNoBG.svg";
import CustomButton from "../components/CustomButton";

const IndexPage = () => {
  const onAboutClicked = () => {
    navigate("/about");
  };

  return (
    <Layout>
      <MainContainer>
        <Container>
          <LogoDiv>
            <Logo src={tsunagaruLogo} />
            <a
              href="https://tsunagaru-edutech.com"
              style={{ textDecoration: "none" }}
            >
              <SubTitle>Tsunagaru Edutech</SubTitle>
            </a>
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
            <CustomButton
              text="About Us"
              border="#6c757d"
              onClick={onAboutClicked}
            />
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
              <p>
                Lightweight, easy to use navigation with no unnecessary
                features. Meaning you can learn and study comfortably wherever
                you are. Uses powerful learning analytics and AI to predict
                learning best practices and save business operational costs!
              </p>
            </SectionContainer>
            <SectionContainer>
              <SectionTitle>
                <Image src={woman} /> Social
              </SectionTitle>
              <p>
                Optional team leaderboards and point systems keep you in
                competition with your colleagues, or can be used to showcase
                your progress as a company. Manabu can also be used to connect
                with your local community and learn together through Live
                Streaming integration.
              </p>
            </SectionContainer>
            <SectionContainer>
              <SectionTitle>
                <Image src={herb} /> Sustainable
              </SectionTitle>
              <p>
                Manabu is both ESG and SDG aligned, meaning it can help you
                track and meet your sustainability commitments.
              </p>
            </SectionContainer>
          </SellingPointContainer>
        </GreyWrapper>
        <OverviewContainer>
          <OverviewTitle>Manabu?</OverviewTitle>
          <p>
            Manubu 学ぶ means to learn and is our new Virtual Learning
            Ecosystem. Based on our original Digital Learning Transformation
            (DLX) and 3 arrow model research. 50% of all employees will need
            re-skilling by 2025 and we are here make this transition as smooth
            as possible
          </p>
        </OverviewContainer>
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

  animation: fadeIn 4s;

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
  margin-right: 10px;

  animation: fadeIn 4s;

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
`;

const Container = styled.div`
  margin-top: 10vh;
  width: 50%;
  max-width: 80%;
  text-align: center;

  p {
    margin-top: 2vh;
    font-size: 1em;
    animation: fadeIn 4s;

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
  animation: fadeIn 4s;

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
`;

const GreyWrapper = styled.div`
  width: 100%;
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
`;

const SellingPointContainer = styled.div`
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

const OverviewContainer = styled.div`
  width: 50%;
  p {
    text-align: center;
    color: #212529;
  }

  @media screen and (max-width: 1024px) {
    width: 70%;
  }

  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;

const OverviewTitle = styled.h3`
  font-size: 28px;
  font-weight: 900;
  text-align: center;
  color: #212529;
`;

const Image = styled.img`
  height: 30px;
`;

export default IndexPage;

export const Head = () => <title>Product Page</title>;
