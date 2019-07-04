import React from 'react';

function MainButton(props) {
  return (
    <button className="content__button">
      {props.text}
    </button>
  )
}

export default MainButton;