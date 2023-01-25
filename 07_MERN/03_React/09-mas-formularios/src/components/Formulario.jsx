import React from "react";
import "./styles.css";

const Formulario = (props) => {
  const { inputs, setInputs } = props;

  const firstNameMessage = () => {
    if (inputs.firstName.length < 2 && inputs.firstName.length > 0) {
      return (
        <p className="error">Nombre debe contener al menos 2 caracteres</p>
      );
    }
  };

  const lastNameMessage = () => {
    if (inputs.lastName.length < 2 && inputs.lastName.length > 0) {
      return (
        <p className="error">Apellido debe contener al menos 2 caracteres</p>
      );
    }
  };

  const passwordLengthMessage = () => {
    if (inputs.password.length < 8 && inputs.password.length > 0) {
      return (
        <p className="error">
          La contraseña debe contener al menos 8 caracteres
        </p>
      );
    }
  };

  const passwordNotMatchMessage = () => {
    if (
      inputs.password !== inputs.confirmPassword &&
      inputs.confirmPassword.length > 0
    ) {
      return <p className="error">Las contraseñas no coinciden</p>;
    }
  };

  const emailMessage = () => {
    if (inputs.email.length < 5 && inputs.email.length > 0) {
      return (
        <p className="error">Tu email debe contener al menos 5 caracteres</p>
      );
    }
  };

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form className="formulario">
        <fieldset className="field">
          <div className="order">
            <label htmlFor="first-name">Nombre</label>
            <input type="text" name="firstName" onChange={onChange} />
          </div>
          {firstNameMessage()}
        </fieldset>
        <fieldset className="field">
          <div className="order">
            <label htmlFor="last-name">Apellido</label>
            <input type="text" name="lastName" onChange={onChange} />
          </div>
          {lastNameMessage()}
        </fieldset>
        <fieldset className="field">
          <div className="order">
            <label htmlFor="email">Tu Email</label>
            <input type="email" name="email" onChange={onChange} />
          </div>
          {emailMessage()}
        </fieldset>
        <fieldset className="field">
          <div className="order">
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" onChange={onChange} />
          </div>
          {passwordLengthMessage()}
          {passwordNotMatchMessage()}
        </fieldset>
        <fieldset className="field">
          <div className="order">
            <label htmlFor="confirm-password">Confirmar Contraseña</label>
            <input type="password" name="confirmPassword" onChange={onChange} />
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default Formulario;
