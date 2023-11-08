import React from 'react';
import ZeroChecklists from './ZeroChecklists';

function CheckList() {
  const [items, setItems] = React.useState([]);

  if (items.length === 0) {
    return <ZeroChecklists/>;
  }
  return <div>Check List</div>;
}


export default CheckList;
