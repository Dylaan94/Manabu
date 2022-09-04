import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

export default function CustomButton({
  onClick,
  border,
  color,
  text,
  bgColor,
  textColor,
  link,
}) {
  return (
    <Button
      style={{
        border: `solid 2px ${border ? border : "black"}`,
        backgroundColor: `${bgColor ? bgColor : "white"}`,
        color: `${textColor ? textColor : "black"}`,
      }}
    >
      <StyledLink
        style={{ color: `${textColor ? textColor : "black"}`, fontWeight: 500 }}
        to={link ? link : "/"}
      >
        {text}
      </StyledLink>
    </Button>
  );
}

const Button = styled.button`
  width: 180px;
  min-width: 100px;
  height: 50px;
  border-radius: 18px;
  margin: 5px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  :visited {
    color: black;
  }
`;
