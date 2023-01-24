import React from "react";
import Header from "./components/navbar";
import Card from "./components/cards";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      <div className="App">
        <Header />
      </div>
      <div>
        <Card title="test" text="testing testing" />
      </div>
    </div>
  );
}

export default App;
