import React from 'react';

import StCheckbox from '../StCheckbox';
import styled from 'styled-components';

const StListItem =  styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StValue = styled.p`
  flex: 1;
`;
function CheckListItem({id, value, isDone, onIsDoneChange}) {
  return (
    <StListItem>
      <StCheckbox isChecked={isDone} onCheckedChange={(data) => onIsDoneChange(id, data)}/>
      <StValue>{value}</StValue>
    </StListItem>
  );
}

export default CheckListItem;
