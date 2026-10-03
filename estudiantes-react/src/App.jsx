import StudentCard from "./components/StudentCard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Información de Estudiantes</h1>

      <div className="students-container">

        <StudentCard
          nombre="Juan Félix"
          programa="Ingeniería de Sistemas"
          semestre="7° semestre"
          foto="https://scontent.fbaq1-1.fna.fbcdn.net/v/t39.30808-1/651954215_3255273254647386_7043060873542420323_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s200x200&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeH2W6Po7i-80tVRo--Wi-XdeAB45b2knnV4AHjlvaSeda6lXIwX0x2Q36Ia8b64c3Gmig5UE8_ojyh1CKnReq6a&_nc_ohc=ZB5N-50ESAoQ7kNvwGF1tfP&_nc_oc=AdoHAi0vu0Rr30nBI-jczFZ91R5xbngqXE8przyb48zi9pHRx7UHaJFTDWjidKhcREA40yF6_tIZyn6LzXLNvbMM&_nc_zt=24&_nc_ht=scontent.fbaq1-1.fna&_nc_gid=RR0MWHsPnBbHoI8GCLSEFg&_nc_ss=7b2a8&oh=00_AQNX_Gzdar5ckn8aKlEeeOqFKA7meyLpui9oN6PsCiYDeQ&oe=6AC75040"
          estado="Activo"
        />

        <StudentCard
          nombre="María González"
          programa="Ingeniería Industrial"
          semestre="4° semestre"
          foto="https://i.pravatar.cc/150?img=47"
          estado="Activo"
        />

        <StudentCard
          nombre="Carlos Rodríguez"
          programa="Administración de Empresas"
          semestre="6° semestre"
          foto="https://i.pravatar.cc/150?img=11"
          estado="Activo"
        />

        <StudentCard
          nombre="Laura Martínez"
          programa="Ingeniería de Sistemas"
          semestre="7° semestre"
          foto="https://i.pravatar.cc/150?img=45"
          estado="Activo"
        />

        <StudentCard
          nombre="Andrés Gómez"
          programa="Diseño Gráfico"
          semestre="3° semestre"
          foto="https://i.pravatar.cc/150?img=14"
          estado="Inactivo"
        />

      </div>
    </div>
  );
}

export default App;