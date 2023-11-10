import React from 'react';
import ZeroChecklists from './ZeroChecklists';
import checklistData from "./data.json";
import styled from 'styled-components';
import CheckListItem from '../ChecklistItem';
import Spacer from '../Spacer';

const TEST_CHECKLIST_DATA = checklistData[0];

const StTitle = styled.h2`
  text-align: center;
  color: var(--color-primary);
  font-weight: 400;
`;

const StWrapper = styled.section`
  max-width: 40rem;
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
  const [items, setItems] = React.useState(TEST_CHECKLIST_DATA.items);

  if (items.length === 0) {
    return <ZeroChecklists/>;
  }

  function onCompletionChange(itemId, isComplete) {
    const nextItems = [...items];
    nextItems.find(item => item.id === itemId).isComplete = isComplete;

    setItems(nextItems);
  }

  function onDelete(itemId) {
    const nextItems = [...items];
    const deleteIndex = nextItems.findIndex(item => item.id === itemId);

    nextItems.splice(deleteIndex, 1);
    setItems(nextItems);
  }
  
  return (
    <StWrapper>
      <StTitle>
        {name}
        <Spacer size="1em"/>
      </StTitle>
      <StList>
        {items.map(({id, value, isComplete}) => (
          <CheckListItem
            key={id}
            id={id}
            value={value}
            isComplete={isComplete}
            onCompletionChange={onCompletionChange}
            onDelete={onDelete}/>
        ))}
      </StList>
    </StWrapper>
  );
}


export default Checklist;
