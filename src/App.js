import { BrowserRouter as Router,  Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import MyProjects from "./components/My Projects/MyProjects";
import NavBar from "./components/NavBar/NavBar";

/*Masimba Banda website Home
 */

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <section id="navBar">
            <NavBar></NavBar>
          </section>

          <section id="myInfo">

          <About></About>
          </section>

          <section id="myProjects">
              <MyProjects></MyProjects>
          </section>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
