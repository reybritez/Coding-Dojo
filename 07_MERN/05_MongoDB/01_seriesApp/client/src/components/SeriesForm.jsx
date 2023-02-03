import React, { useState } from "react";
import axios from "axios";

const SerieForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/crearserie", {
        titulo,
        creador,
        rating,
        genero,
        year,
        portada,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("hubo un error: ", err);
      });
  };

  const [titulo, setTitulo] = useState("");
  const [creador, setCreador] = useState("");
  const [rating, setRating] = useState("");
  const [genero, setGenero] = useState("");
  const [year, setYear] = useState("");
  const [portada, setPortada] = useState("");

  const createSerie = (e) => {
    e.preventDefault();
    const newUser = { username, email, password };
    console.log("Welcome", newUser);
  };

  return (
    <div>
      <h1> Crear Serie Animada</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>Titulo: </label>
          <input type="text" onChange={(e) => setTitulo(e.target.value)} />
        </div>
        <div>
          <label>Creador: </label>
          <input type="text" onChange={(e) => setCreador(e.target.value)} />
        </div>
        <div>
          <label>Rating: </label>
          <input type="text" onChange={(e) => setRating(e.target.value)} />
        </div>
        <div>
          <label>Genero: </label>
          <input type="text" onChange={(e) => setGenero(e.target.value)} />
        </div>
        <div>
          <label>Año: </label>
          <input type="text" onChange={(e) => setYear(e.target.value)} />
        </div>
        <div>
          <label>Portada: </label>
          <input type="text" onChange={(e) => setPortada(e.target.value)} />
        </div>
        <input type="submit" value="Create Serie" />
      </form>
    </div>
  );
};

export default SerieForm;
