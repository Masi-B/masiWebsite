import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import MyProjects from "./components/My Projects/MyProjects";
import NavBar from "./components/NavBar/NavBar";

/*Masimba Banda website Home
 */

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
            <NavBar></NavBar>

          <section id="myInfo">
            <About></About>
          </section>

          <section id="myProjects">
            <MyProjects></MyProjects>
          </section>

          <section id="myContactInfo">
            <Contact>

            </Contact>
          </section>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
