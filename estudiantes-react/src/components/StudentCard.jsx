function StudentCard({ nombre, programa, semestre, foto, estado }) {
  return (
    <div className="student-card">
      <img src={foto} alt={`Foto de ${nombre}`} />

      <h2>{nombre}</h2>

      <p>
        <strong>Programa:</strong> {programa}
      </p>

      <p>
        <strong>Semestre:</strong> {semestre}
      </p>

    <p>
        <strong>Estado académico:</strong>{" "}
        <span className={estado === "Activo" ? "activo" : "inactivo"}>
            {estado}
  </span>
</p>
    </div>
  );
}

export default StudentCard;