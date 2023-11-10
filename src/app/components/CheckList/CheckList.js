import React from 'react';
import ZeroChecklists from './ZeroChecklists';
import checklistData from "./data.json";
import styled from 'styled-components';
import CheckListItem from '../ChecklistItem';
import Toolbar from '../Toolbar';

const TEST_CHECKLIST_DATA = checklistData[0];

const StTitle = styled.h2`
  text-align: center;
  color: var(--color-primary);
  font-weight: 400;
  margin-bottom: 1em;
`;

const StWrapper = styled.section`
  max-width: 32rem;
`;

const StList = styled.ul`
  display:flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
  
`;

function Checklist() {
  const [name, setName] = React.useState(TEST_CHECKLIST_DATA.name);
  const [items, setChecklist] = React.useState(TEST_CHECKLIST_DATA.items);

  if (items.length === 0) {
    return <ZeroChecklists/>;
  }

  function onCompletionChange(itemId, isComplete) {
    const nextItems = [...items];
    nextItems.find(item => item.id === itemId).isComplete = isComplete;

    setChecklist(nextItems);
  }
  
  return (
    <StWrapper>
      <StTitle>{name}</StTitle>
      <Toolbar/>
      <StList>
        {items.map(({id, value, isComplete}) => (
          <CheckListItem
            key={id}
            id={id}
            value={value}
            isComplete={isComplete}
            onCompletionChange={onCompletionChange}/>
        ))}
      </StList>
    </StWrapper>
  );
}


export default Checklist;
