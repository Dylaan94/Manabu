import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

// component imports
import TeamMembers from "../components/TeamMembers";

export default function About() {
  return (
    <Layout>
      <Title> Our Team</Title>
      <TeamSection>
        <TeamMembers />
      </TeamSection>
    </Layout>
  );
}

const TeamSection = styled.section`
  display: flex;
`;

const Title = styled.h2`
  font-size: 24px;
`;
