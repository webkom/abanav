import React from "react";
import Header from "./components/Header";
import sites from "./sites.json";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="grid">
          {sites.map((site) => (
            <Card
              title={site.name}
              url={site.url}
              description={site.description}
              image={site.image === "" ? "/abakule.png" : site.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
