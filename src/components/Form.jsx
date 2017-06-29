import React from 'react';

import Input from './Input';

function Form(props) {
  return (
    <form className="signup-form mdc-theme--dark" onSubmit={props.onSubmit}>
      <Input type="text" name="firstname" placeholder="First name" />
      <Input type="text" name="lastname" placeholder="Last name" />
      <Input type="email" name="email" placeholder="email" />
      <Input type="password" name="password" placeholder="password" />
      <button type="submit" className="mdc-button mdc-button--primary mdc-button--raised">Register</button>
    </form>
  );
}

export default Form;