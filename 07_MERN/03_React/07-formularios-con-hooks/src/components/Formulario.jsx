import React from "react";
import "./styles.css";

const Form = (props) => {
  const { entradas, setInputs } = props;
  const enCambio = (event) => {
    setInputs({
      ...entradas,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <form className="formulario">
        <fieldset className="field">
          <label htmlFor="first-name">First Name</label>
          <input type="text" name="firstName" onChange={enCambio} />
        </fieldset>
        <fieldset className="field">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" name="lastName" onChange={enCambio} />
        </fieldset>
        <fieldset className="field">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={enCambio} />
        </fieldset>
        <fieldset className="field">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={enCambio} />
        </fieldset>
        <fieldset className="field">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" name="confirmPassword" onChange={enCambio} />
        </fieldset>
      </form>
    </>
  );
};

export default Form;
