import React from "react";
import Navbar from "./components/navbar";
import Card from "./components/cards";

function App() {
  return (
    <div>
      <div className="App">
        <Navbar></Navbar>
      </div>
      <div>
        <Card title="test" text="testing testing"/>
      </div>
    </div>
  );
}

export default App;
