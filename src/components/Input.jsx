import React from 'react';

function Input(props) {
  return (
    <div className="mdc-textfield">
      <input
        type={props.type}
        className="mdc-textfield__input"
        name={props.name}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default Input;