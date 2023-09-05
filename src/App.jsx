import NavB from "./components/Navbar";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Hero";

import Miapi from "./components/Miapi"; // Importa el componente Miapi aquí

function App() {
  return (
    <div>
      <div>
       <Header text="Personajes de Rick and Morty" />
        <NavB />
      
        
        <Miapi />
      </div>
    </div>
  

  );
}

export default App;
