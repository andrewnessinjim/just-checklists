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
function CheckListItem({id, value, isComplete, onCompletionChange}) {
  return (
    <StListItem>
      <StCheckbox
        isChecked={isComplete}
        onCheckedChange={
          (data) => onCompletionChange(id, data)
        }/>
      <StValue>{value}</StValue>
    </StListItem>
  );
}

export default CheckListItem;
