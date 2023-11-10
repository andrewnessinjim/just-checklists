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
  const checkboxId = `is-complete-checkbox${React.useId()}`;

  return (
    <StListItem>
      <StCheckbox
        id={checkboxId}
        isChecked={isComplete}
        onCheckedChange={
          (data) => onCompletionChange(id, data)
        }/>
      <StValue>
        <label htmlFor={checkboxId}>{value}</label>
      </StValue>
    </StListItem>
  );
}

export default CheckListItem;
