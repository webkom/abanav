import Header from "./components/navbar";
import SiteViews from "./components/SiteViews";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="container">
      <Header />
      <SiteViews></SiteViews>
      <Footer />
    </div>
  );
}

export default App;
