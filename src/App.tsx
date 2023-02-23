import Header from "./components/navbar";
import SiteViews from "./components/SiteViews";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
        <div className="container-xxl">
            <Header />
            <SiteViews></SiteViews>
        </div>
        <Footer />
    </div>
  );
}

export default App;
