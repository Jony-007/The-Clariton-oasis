import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-gray--0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-gray-300);
`;
const Header = () => {
  return <StyledHeader>Header</StyledHeader>;
};

export default Header;
