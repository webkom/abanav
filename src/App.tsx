import React from "react";
import Navbar from "./components/navbar";
import CardComponent from "./components/CardComponent";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="container-fluid">
      <div className="App">
        <Navbar></Navbar>
      </div>
      <div className="card-container">
        <CardComponent title="Abakus.no">Denne kjenner du til</CardComponent>
        <CardComponent title="Opptak">Lykke til!</CardComponent>
        <CardComponent title="Statutter">Lover og regler, må følges</CardComponent>
        <CardComponent title="Status">Sjekk om Abakus.no funker</CardComponent>
        <CardComponent title="Ny i Trondheim">Ny i byen, da MÅ du trykk her!</CardComponent>
        <CardComponent title="Veldedighetsfest Auksjon">Drikk øl og hjelp verden</CardComponent>
        <CardComponent title="Abakus Saker">Diskuter saker i Abakus</CardComponent>
        <CardComponent title="Placeholder">Bla bla bla</CardComponent>
      </div>
    </div>
  );
}

export default App;
