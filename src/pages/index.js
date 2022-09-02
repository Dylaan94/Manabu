import * as React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

import rocket from "../images/rocket.png";
import { render } from "react-dom";

const IndexPage = () => {
  return (
    <Layout>
      <MainContainer>
        <Container>
          <SubTitle>Goodbye, old Learning Management Systems</SubTitle>
          <Title>
            <Image src={rocket} />
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("Hello, Manabu").start();
              }}
            />
          </Title>
          <Paragraph>
            Manabu is{" "}
            <TsunagaruLink href="https://tsunagaru-edutech.com">
              Tsunagaru Edutech's
            </TsunagaruLink>{" "}
            latest innovation. A next generation Virtual Learning Ecosystem
            (VLE) focused on social, team-based learning
          </Paragraph>
        </Container>
      </MainContainer>
    </Layout>
  );
};

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  margin-top: 10vh;
  margin-bottom: 10vh;
  width: 50%;
  max-width: 80%;
  text-align: center;
  color: #f8f9fa;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 900;
`;

const SubTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
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

const Image = styled.img`
  height: 30px;
`;

const Paragraph = styled.p`
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

const TsunagaruLink = styled.a`
  font-weight: 900;
  font-size: 18px;
  color: white;
`;

export default IndexPage;

export const Head = () => <title>Product Page</title>;
