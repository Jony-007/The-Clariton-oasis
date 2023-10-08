import React from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: red;
  padding: 2px;
`;

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading type="h1"> The wild oasis</Heading>
        <Heading type="h2"> Check in and out</Heading>

        <Button onClick={() => alert("Pikachu")}>Check in</Button>
        <Button onClick={() => alert("Pikachu")}>Check in</Button>
        <Heading type="h3"> Form</Heading>

        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
};
