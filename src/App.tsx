import './App.scss';
import Home from "./pages/Home/Home"
import NavBar from "./Components/NavBar/NavBar"
import ContactArea from "./Components/ContactArea/ContactArea"
import AboutMe from "./pages/AboutMe/AboutMe"
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom"

function App() {
  return (
    <div className="app-container">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={AboutMe} />
        </Switch>
        <ContactArea />
      </Router>
    </div>
  );
}

export default App;
