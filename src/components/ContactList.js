import React from "react";
import styled from "styled-components";

//Icon imports

import phone from "../images/phone-solid.svg";
import email from "../images/envelope-regular.svg";
import linkedIn from "../images/linkedin.svg";
import instagram from "../images/instagram.svg";

export default function ContactList() {
  return (
    <List>
      <ListItem aria-label="Email Address">
        <a href="mailto:support@tsunagaru-edutech.com">
          <Icon src={email} />
          <p>support@tsunagaru-edutech.com</p>
        </a>
      </ListItem>
      <ListItem aria-label="Phone Number">
        <Icon src={phone} />
        <p>+81 70 8419 6469</p>
      </ListItem>
      <ListItem>
        <a
          href="https://www.linkedin.com/company/tsunagaru-edutech/"
          target="_blank"
        >
          <Icon src={linkedIn} />
          <p>LinkedIn</p>
        </a>
      </ListItem>
      <ListItem>
        <a href="https://www.instagram.com/tsunagaruedutech/" target="_blank">
          <Icon src={instagram} />
          <p>Instagram</p>
        </a>
      </ListItem>
    </List>
  );
}

const List = styled.ul`
  list-style: none;
  padding: 0;
  width: 60%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 80%;
    align-items: center;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const ListItem = styled.li`
  display: flex;
  padding: 2vh;

  a {
    display: flex;

    color: black;
  }

  p {
    margin: 0;
    margin-left: 0.5em;
    padding: 0;
    font-size: 1.3em;
  }
`;

const Icon = styled.img`
  height: 2em;
`;
