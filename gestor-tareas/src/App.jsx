import { useState } from "react";
import "./App.css";

function App() {
  const [tareas, setTareas] = useState([
    {
      id: 1,
      titulo: "Estudiar React",
      descripcion: "Repasar componentes, estado y listas.",
      completada: false,
    },
    {
      id: 2,
      titulo: "Hacer ejercicio",
      descripcion: "Realizar actividad física durante 30 minutos.",
      completada: false,
    },
    {
      id: 3,
      titulo: "Entregar trabajo",
      descripcion: "Subir el trabajo de React a la plataforma.",
      completada: true,
    },
  ]);

  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [mostrarCompletadas, setMostrarCompletadas] = useState(true);

  function agregarTarea(e) {
    e.preventDefault();

    if (titulo.trim() === "") {
      return;
    }

    const nuevaTarea = {
      id: Date.now(),
      titulo: titulo,
      descripcion: descripcion,
      completada: false,
    };

    setTareas([...tareas, nuevaTarea]);

    setTitulo("");
    setDescripcion("");
  }

  function eliminarTarea(id) {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  }

  function cambiarEstado(id) {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id
          ? { ...tarea, completada: !tarea.completada }
          : tarea
      )
    );
  }

  const tareasMostradas = mostrarCompletadas
    ? tareas
    : tareas.filter((tarea) => !tarea.completada);

  const tareasPendientes = tareas.filter(
    (tarea) => !tarea.completada
  ).length;

  return (
    <div className="app">
      <h1>Gestor de Tareas</h1>

      <p className="pendientes">
        Tareas pendientes: {tareasPendientes}
      </p>

      <form onSubmit={agregarTarea} className="formulario">
        <input
          type="text"
          placeholder="Título de la tarea"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <textarea
          placeholder="Descripción de la tarea"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />

        <button type="submit">
          Agregar tarea
        </button>
      </form>

      <button
        className="filtro"
        onClick={() => setMostrarCompletadas(!mostrarCompletadas)}
      >
        {mostrarCompletadas
          ? "Ocultar tareas completadas"
          : "Mostrar todas las tareas"}
      </button>

      <div className="lista-tareas">
        {tareasMostradas.map((tarea) => (
          <div
            className={`tarea ${
              tarea.completada ? "completada" : ""
            }`}
            key={tarea.id}
          >
            <h2>{tarea.titulo}</h2>

            <p>{tarea.descripcion}</p>

            <p>
              Estado:{" "}
              {tarea.completada
                ? "Completada"
                : "Pendiente"}
            </p>

            <button onClick={() => cambiarEstado(tarea.id)}>
              {tarea.completada
                ? "Marcar como pendiente"
                : "Marcar como completada"}
            </button>

            <button onClick={() => eliminarTarea(tarea.id)}>
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;