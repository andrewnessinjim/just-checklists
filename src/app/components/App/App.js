import React from 'react';

import GlobalStyles from '../GlobalStyles';
import styled from 'styled-components';
import Checklist from '../Checklist';

const SiteWrapper = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
function App() {
  return(
    <SiteWrapper>
      <GlobalStyles/>
      <Checklist/>
    </SiteWrapper>
  )
}

export default App;
