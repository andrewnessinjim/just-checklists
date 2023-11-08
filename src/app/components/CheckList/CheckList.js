import React from 'react';
import ZeroChecklists from './ZeroChecklists';
import checklistData from "./data.json";
import styled from 'styled-components';
import StCheckbox from '../StCheckbox';
import CheckListItem from '../ChecklistItem/ChecklistItem';

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

const StListItem =  styled.li`
`;

function CheckList() {
  const [checklist, setChecklist] = React.useState(TEST_CHECKLIST_DATA);

  if (checklist.items.length === 0) {
    return <ZeroChecklists/>;
  }

  function onIsDoneChange(id, isDone) {
    const nextChecklist = {...checklist};
    checklist.items.find(item => item.id === id).isDone = isDone;

    setChecklist(nextChecklist);
  }

  return (
    <StWrapper>
      <StTitle>{TEST_CHECKLIST_DATA.name}</StTitle>
      <StList>
        {checklist.items.map(({id, value, isDone}) => (
          <CheckListItem
            key={id}
            id={id}
            value={value}
            isDone={isDone}
            onIsDoneChange={onIsDoneChange}/>
        ))}
      </StList>
    </StWrapper>
  );
}


export default CheckList;
