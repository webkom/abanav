import Header from "./components/navbar";
import SiteViews from "./components/SiteViews";
function App() {
  return (
    <div className="container">
      <div className="App">
        <Header />
      </div>
      <SiteViews></SiteViews>
    </div>
  );
}

export default App;
