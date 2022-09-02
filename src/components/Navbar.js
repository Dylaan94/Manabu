import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <Title> Manabu </Title>
      <Links>
        <StyledLink to="/">Product</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </Links>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100vw;
  min-height: 65px;
  background-color: white;
  border-bottom: solid 1px #eaeaed;
`;

const Title = styled.h1`
  padding: 0px 15px;
  font-size: 24px;
`;

const Links = styled.div``;

const StyledLink = styled(Link)`
  padding: 15px;
  text-decoration: none;

  :visited {
    color: black;
  }
`;

export default Navbar;
