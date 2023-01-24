import React from "react";
import Navbar from "./components/navbar";
import Card from "./components/cards";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container-fluid">
      <div className="App">
        <Navbar></Navbar>
      </div>
      <div>
        <Card title="test" text="testing testing" />
      </div>
    </div>
  );
}

export default App;
