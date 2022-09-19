import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import TsunagaruLogo from "../images/tsunagaruLogoNoBG.svg";
import CustomButton from "./CustomButton";

export default function Footer() {
  return (
    <StyledFooter>
      <Contact>
        <Logo src={TsunagaruLogo}></Logo>
        <ul>
          <li id="title">Tsunagaru Edutech (Manabu)</li>
          <li>+81 70 8419 6469</li>
          <li>support@tsunagaru-edutech.com</li>
          <li>
            福岡県福岡市博多区博多駅中央街1-1 JR博多シティ アミュプラザ博多
            地下1階
          </li>
          <li>Co-working & Co-learning Space Q, Fukuoka 812-0012, Japan</li>
        </ul>
      </Contact>
      <QuickLinks>
        <ul>
          <li id="quickLinks"> Quick Links</li>
          <li>
            <StyledLink to="/">Product</StyledLink>
          </li>
          <li>
            <StyledLink to="/about">About</StyledLink>
          </li>
          <li>
            <StyledLink to="/Contact">Contact</StyledLink>
          </li>
        </ul>
      </QuickLinks>
      <KeepInTouch>
        <h3>Keep in Touch</h3>
        <p>
          Follow our newsletter to keep up to date with Manabu and Tsuangaru
          Edutech!
        </p>
        <CustomButton
          text="Stay Updated"
          border="#ff006e"
          bgColor="#ff006e"
          textColor="white"

        />
      </KeepInTouch>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  width: 100%;
  background-color: #6e68f0;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Contact = styled.div`
  margin: 3vh 0vh;
  display: flex;
  flex-direction: row;
  width: 35%;
  color: white;

  ul {
    width: 80%;
    list-style: none;
    margin: 0vh 2vw;
    padding-left: 0;
  }

  #title {
    font-size: 22px;
    font-weight: 900;
    margin-bottom: 10px;
  }
`;

const QuickLinks = styled.div`
  margin: 3vh 0vh;
  width: 25%;
  color: white;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    #quickLinks {
      font-weight: 900;
      font-size: 22px;
      margin-bottom: 10px;
    }
  }
`;

const KeepInTouch = styled.div`
  width: 35%;
  color: white;

  h3{
    font-size: 22px;
    font-weight: 900;
  }
`;

const Logo = styled.img`
  width: 20%;
  padding: 0;
  margin: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  :visited {
    color: white;
  }

  :hover {
    font-weight: 900;
  }
`;
