import React from "react";
import styled from "styled-components";

//component imports
import CustomButton from "./CustomButton";

//image imports
import locationPin from "../images/locationPin.png";

export default function GetInvolved() {
  const onButtonClicked = () => {
    console.log("button clicked");
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfnErVpNks2PENvWxhTpgsI-wzgbIzk9wKoB3-Eum1s85n_Ig/viewform"
    );
  };

  return (
    <Root>
      <Title> Want to get involved? </Title>
      <SubText>
        We're always on the look out for new UI/UX Designers, Graphic Designers
        and Development Interns so get in touch!
      </SubText>
      <Location>
        <IconImage src={locationPin} />
        <span style={{ fontWeight: "900", fontSize: "1.1em" }}>
          Location:{" "}
        </span>{" "}
        Japan (Remote)
      </Location>
      <h4>How to apply</h4>
      <p>
        Read the form below and fill in your details. Don't forget to include
        your portfolio and any work you are proud of!
      </p>
      <CustomButton
        text="Join Us"
        border="#ff006e"
        bgColor="#ff006e"
        textColor="white"
        onClick={onButtonClicked}
      />
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;

  @media screen and (max-width: 768px) {
    width: 80%;
  }

  h4 {
    margin: 0;
    padding: 0;
    font-weight: 900;
    font-size: 1.4em;
  }
  p {
    width: 80%;
    text-align: center;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;

const Title = styled.h2`
  font-size: 2.2em;
  align-self: center;
  text-align: center;
`;

const SubText = styled.h3`
  margin: 0;
  padding: 0;
  text-align: center;
`;

const Location = styled.p``;

const IconImage = styled.img`
  height: 1.5em;
`;
