import React from "react";
import styled from "styled-components";

export default function FullButton({ title, action, border, ...props }) {
  return (
    <Wrapper
      className="animate pointer rounded"
      onClick={action ? () => action() : null}
      border={border}
      {...props}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#707070" : "#2351D6")};
  background-color: ${(props) => (props.border ? "transparent" : "#2351D6")};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? "#707070" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#2351d6")};
    border: 1px solid #2351d6;
    color: ${(props) => (props.border ? "#2351D6" : "#fff")};
  }
`;
