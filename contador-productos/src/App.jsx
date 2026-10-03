import { useState } from "react";
import "./App.css";

function App() {
  const [cantidad, setCantidad] = useState(0);

  function incrementar() {
    setCantidad(cantidad + 1);
  }

  function disminuir() {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  }

  function reiniciar() {
    setCantidad(0);
  }

  return (
    <div className="contador">
      <h1>Contador de Productos</h1>

      <div className="contador-card">
        <h2>{cantidad}</h2>

        <div className="botones">
          <button onClick={disminuir}>−</button>
          <button onClick={reiniciar}>Reiniciar</button>
          <button onClick={incrementar}>+</button>
        </div>

        <p>
          {cantidad === 0
            ? "No hay productos seleccionados"
            : cantidad === 1
            ? "Has seleccionado un producto"
            : "Has seleccionado varios productos"}
        </p>
      </div>
    </div>
  );
}

export default App;