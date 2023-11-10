import React from 'react';
import { Plus } from 'react-feather';
import styled from 'styled-components';

const StWrapper = styled.section`
`
const StButton = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 250ms transform;

  &:hover, &:focus {
    transform: scale(1.05)
  }

  &:active {
    transform: scale(0.95);
  }
`;

function Toolbar() {
  return (
    <StWrapper>
      <StButton>
        <Plus />
      </StButton>
    </StWrapper>
  );
}

export default Toolbar;
