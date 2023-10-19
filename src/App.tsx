import Header from "./components/Header";
import sites from "./sites.json";
import Card from "./components/Card";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="application">
      <Helmet>
        <script
          defer
          data-domain="ababart.abakus.no"
          src="https://analytics.webkom.dev/js/plausible.js"
        ></script>
      </Helmet>
      <Header />
      <div className="container">
        <div className="grid">
          {sites.map((site, i) => (
            <Card
              key={i}
              title={site.name}
              url={site.url}
              image={site.image === "" ? "/abakule.png" : site.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
