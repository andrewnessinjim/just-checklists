import * as Checkbox from '@radix-ui/react-checkbox';

import React from 'react';
import { Check } from 'react-feather';
import styled from 'styled-components';

const StCheckboxRoot = styled(Checkbox.Root)`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${p => p.checked? "var(--color-primary)" : "var(--color-primary-light)"};
  border: none;
  border-radius: var(--border-radius-size-small);
`;

const StCheckboxIndicator = styled(Checkbox.Indicator)`
  display: inline-block;
`;

const StCheckIcon = styled(Check)`
  stroke: var(--color-primary-dark);
`;

function StCheckbox({isChecked, onCheckedChange, ...delegated}) {
  return (
    <StCheckboxRoot
      {...delegated}
      height={24}
      weight={24}
      checked={isChecked}
      onCheckedChange={onCheckedChange}>
      <StCheckboxIndicator>
        <StCheckIcon height={22} width={22} strokeWidth={5}/>
      </StCheckboxIndicator>
    </StCheckboxRoot>
  );
}

export default StCheckbox;
