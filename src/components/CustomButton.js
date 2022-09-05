import React from "react";
import styled from "styled-components";

export default function CustomButton({
  onClick,
  border,
  color,
  text,
  bgColor,
  textColor,
  bold,
}) {
  return (
    <Button
      onClick={onClick}
      style={{
        border: `solid 2px ${border ? border : "black"}`,
        backgroundColor: `${bgColor ? bgColor : "white"}`,
        color: `${textColor ? textColor : "#212529"}`,
        fontWeight: `${bold ? "900" : "500"}`,
      }}
      role="link"
    >
      {text}
    </Button>
  );
}

const Button = styled.button`
  width: 180px;
  min-width: 100px;
  height: 50px;
  border-radius: 18px;
  margin: 5px;
  font-size: 1em;
  :hover {
    cursor: pointer;
  }
`;
