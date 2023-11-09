import React from 'react';
import ZeroChecklists from './ZeroChecklists';
import checklistData from "./data.json";
import styled from 'styled-components';
import CheckListItem from '../ChecklistItem';

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

function CheckList() {
  const [checklist, setChecklist] = React.useState(TEST_CHECKLIST_DATA);

  if (checklist.items.length === 0) {
    return <ZeroChecklists/>;
  }

  function onCompletionChange(id, isComplete) {
    const nextChecklist = {...checklist};
    checklist.items.find(item => item.id === id).isComplete = isComplete;

    setChecklist(nextChecklist);
  }
  
  return (
    <StWrapper>
      <StTitle>{TEST_CHECKLIST_DATA.name}</StTitle>
      <StList>
        {checklist.items.map(({id, value, isComplete}) => (
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


export default CheckList;
