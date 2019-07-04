import React from 'react';

function PersonItem(props) {
  return (
    <div className="content__person-inner">
      <div className="content__person-wrap all-center">
      {props.text}
      </div>
    </div>
  )
}

export default PersonItem;