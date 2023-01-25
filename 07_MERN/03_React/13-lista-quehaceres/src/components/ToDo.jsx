import React, { useState, useEffect } from "react";
import "./styles.css";

const ToDO = () => {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    const tareas = JSON.parse(localStorage.getItem("tareas"));
    if (tareas) {
      setTareas(tareas);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.tarea.value);

    const newTareas = [
      ...tareas,
      {
        id: Date.now().toString(),
        tarea: e.target.tarea.value,
        state: false,
      },
    ];

    setTareas(newTareas);
    console.log(`El estado de las tareas es: ${tareas}`);
    e.target.tarea.value = "";
    localStorage.setItem("tareas", JSON.stringify(newTareas));
    console.log(`Tareas: ${tareas}`);
  };

  const checkTarea = (tarea) => {
    const newTareas = tareas.map((tareaItem) => {
      if (tareaItem.id === tarea.id) {
        return { ...tareaItem, state: !tareaItem.state };
      }
      return tareaItem;
    });
    setTareas(newTareas);
    console.log(`Tareas: ${tareas}`);
  };

  const borrarTarea = (tarea) => {
    const newTareas = tareas.filter((tareaItem) => {
      return tareaItem.id !== tarea.id;
    });
    setTareas(newTareas);
    localStorage.setItem("tareas", JSON.stringify(newTareas));
  };

  return (
    <div className="container">
      <h1> Lista de Tareas </h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="tarea" placeholder="Ingresa una nueva tarea" />
        <button type="input">Añadir</button>
      </form>
      <table className="beautiful-lista">
        <ul>
          <th> Tarea |</th>
          <th> Completado |</th>
          <th> Borrar </th>
          {tareas.map((tarea, index) => {
            return (
              <li
                key={tarea.id}
                style={{
                  textDecoration: tarea.state ? "line-through" : "",
                }}
              >
                <td>{tarea.tarea} </td>
                <td>
                  <input
                    type="checkbox"
                    onChange={() => checkTarea(tarea)}
                    id={index}
                    value={tarea}
                  ></input>
                </td>
                <td>
                  <button type="input" onClick={() => borrarTarea(tarea)}>
                    Borrar
                  </button>
                </td>
              </li>
            );
          })}
        </ul>
      </table>
    </div>
  );
};

export default ToDO;
