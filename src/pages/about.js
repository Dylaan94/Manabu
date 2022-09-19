import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

// component imports
import TeamMembers from "../components/TeamMembers";
import GetInvolved from "../components/GetInvolved";

export default function About() {
  return (
    <Layout>
      <Root>
        <TeamSection>
          <TeamMembers />
        </TeamSection>
        <GetInvolvedSection>
          <GetInvolved />
        </GetInvolvedSection>
      </Root>
    </Layout>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 80vw;
`;

const TeamSection = styled.section`
  display: flex;
`;

const GetInvolvedSection = styled.section`
  display: flex;
  justify-content: center;
`;
