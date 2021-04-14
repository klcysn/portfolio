import './App.scss';
import Home from "./pages/Home/Home"
import NavBar from "./Components/NavBar/NavBar"
import ContactArea from "./Components/ContactArea/ContactArea"

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <Home />
      <ContactArea />
    </div>
  );
}

export default App;
