import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Navigationbar from "./Components/Navigation/Navigationbar";
import Carousels from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigationbar></Navigationbar>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/projects" component={Carousels}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
