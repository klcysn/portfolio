import './App.scss';
import Home from "./pages/Home/Home"
import NavBar from "./Components/NavBar/NavBar"

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
