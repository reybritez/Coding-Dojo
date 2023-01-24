import React from "react";
import "./styles.css";

const Resultado = (props) => {
  const { datos } = props;

  return (
    <>
      <div className="results">
        <h1>Tus datos son</h1>
        <p>Nombre: {datos.firstName}</p>
        <p>Apellido: {datos.lastName}</p>
        <p>Email: {datos.email}</p>
        <p>Contraseña: {datos.password}</p>
        <p>Confirmar Contraseña: {datos.confirmPassword}</p>
      </div>
    </>
  );
};

export default Resultado;
