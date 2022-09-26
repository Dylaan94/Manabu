import React from "react";
import styled from "styled-components";



export default function ContactList() {
  return (
    <List>
      {/* <ListItem>
        <p>Address</p>
        <p>Co-working & Co-learning Space Q, Fukuoka 812-0012, Japan</p>
      </ListItem> */}
      <ListItem aria-label="Email Address">
        <p>
          <a href="mailto:support@tsunagaru-edutech.com">
            support@tsunagaru-edutech.com
          </a>
        </p>
      </ListItem>
      <ListItem aria-label="Phone Number">
        <p>+81 70 8419 6469</p>
      </ListItem>

      <ListItem>
        <p>LinkedIn</p>
      </ListItem>
      <ListItem>
        <p>Instagram</p>
      </ListItem>
    </List>
  );
}

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  p {
    margin: 0;
    padding: 0;
  }
`;
