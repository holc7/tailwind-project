import SideMenu from "./Sidebar";
import "./App.css";
import NavBar from "./NavBar";
import Cards from "./Cards";
import FooterComponent from "./Footer";
import CountryWrapper from "./CountryWrapper";

function App() {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideMenu />
        <div className="flex-grow">
          <CountryWrapper />
          <Cards />
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
