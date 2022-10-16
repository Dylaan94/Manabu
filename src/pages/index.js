// add google analytics


import * as React from "react";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import { navigate } from "gatsby";

// Component imports
import SellingPoint from "../components/SellingPoint";
import ProductExample from "../components/ProductExample";
import CustomButton from "../components/CustomButton";

// image imports
import tsunagaruLogo from "../images/tsunagaruLogo.png";

const IndexPage = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("scrolled");
      setHasScrolled(true);
    };

    if (!hasScrolled) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

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
            ></a>
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
          <SellingPoint />
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
        <GreyWrapper>
          <ProductExample />
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

const Container = styled.div`
  margin-top: 10vh;
  width: 50%;
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

  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;

const Title = styled.h2`
  font-size: 5.3em;
  font-weight: 900;
  margin-top: 0;
  margin-bottom: 0;

  @media screen and (max-width: 400px) {
    font-size: 4em;
  }

`;


const LogoDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  height: 80px;
  width: auto;
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

const OverviewContainer = styled.div`
  margin-bottom: 3vh;
  margin-top: 3vh;
  width: 50%;
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
  margin: 0;
  font-size: 28px;
  font-weight: 900;
  text-align: center;
  color: #212529;
`;

export default IndexPage;

export const Head = () => <title>Product Page</title>;
