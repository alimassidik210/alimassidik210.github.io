import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./Component/NavbarComponent";
import Footer from "./Component/Footer";
import Content from "./Component/Content";
import HeroImage from "./Component/HeroImage";
import Acordion from "./Component/Accordiont";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent />
        <Switch>
          <Route exact path="/contact" Component={Contact} />
          <Route exact path="/about" Component={About} />
        </Switch>
        <HeroImage />
        <Content />
        <Acordion />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
