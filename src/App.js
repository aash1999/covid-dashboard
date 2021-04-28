import "./App.css"
import Navbar from "./components/Navbar/Navbar.jsx"
import GraphLeft from "./components/Graph-left/Graph-left.jsx"
import NumbersRight from "./components/NumbersRight/NumbersRight.jsx"
function App() {
  return (
    <div className="App">
    <Navbar />
    <GraphLeft />
    <NumbersRight />
    </div>
  );
}

export default App;
