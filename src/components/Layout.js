import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <Container>
      <Navbar />
      {children}
      <h1> Im a footer </h1>
    </Container>
  );
}

const Container = styled.body`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%auto;
  background-color: #6e68f0;
`;
