import React from 'react';
import { Edit2, Trash2 } from 'react-feather';
import styled from 'styled-components';

const StWrapper = styled.section`
  display: flex;
  gap: 16px;
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
  transition: 250ms transform, 250ms opacity;
  background: transparent;

  > svg {
    stroke: var(--color-primary);
    opacity: 0.5;
  }

  &:hover, &:focus {
    transform: scale(1.1);

    >svg {
      opacity: 1;
    }
  }

  &:active {
    transform: scale(0.9);
    >svg {
      opacity: 1;
    }
  }
`;

function Toolbar({onDelete}) {
  return (
    <StWrapper>
      <StButton>
        <Edit2 />
      </StButton>
      <StButton onClick={onDelete}>
        <Trash2 />
      </StButton>
    </StWrapper>
  );
}

export default Toolbar;
