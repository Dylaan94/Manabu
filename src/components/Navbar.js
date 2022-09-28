import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

// image imports
import logo from "../images/manabuLogo.png";

const Navbar = () => {
  return (
    <Nav>
      <Image src={logo} />
      <Title> Manabu </Title>
      <Links>
        <StyledLink to="/">Product</StyledLink>
        <StyledLink to="/about">About Us</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </Links>
    </Nav>
  );
};

const Nav = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100vw;
  min-height: 65px;
  background-color: white;
  border-bottom: solid 2px #eaeaed;

  @media screen and (max-width: 480px) {
    justify-content: center;
  }
`;

const Image = styled.img`
  height: 50px;
  padding-left: 15px;
`;

const Title = styled.h1`
  padding: 0px 15px;
  font-size: 24px;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const Links = styled.div``;

const StyledLink = styled(Link)`
  padding: 15px;
  text-decoration: none;
  color: black;

  :visited {
    color: black;
  }

  :hover {
    font-weight: 900;
  }

  @media screen and (max-width: 360px) {
    padding: 5px;
  }
`;

export default Navbar;
