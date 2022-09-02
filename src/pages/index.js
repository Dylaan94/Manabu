import * as React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

const IndexPage = () => {
  return (
    <Layout>
      <Container>
        <h2> Goodbye Old Learning Management Systems</h2>
        <p>
          Manabu is our latest innovation. A next generation Virtual Learning
          Ecosystem (VLE) focused on social, team-based learning
        </p>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  width: 60%;
  align-self: center;
  text-align: center;
  color: #f8f9fa;
`;

export default IndexPage;

export const Head = () => <title>Product Page</title>;
