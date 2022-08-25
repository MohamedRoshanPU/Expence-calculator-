import "./App.css";
import ContextApi from "./Components/Global/ContextApi";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <ContextApi>
        <Home />
      </ContextApi>
    </div>
  );
}

export default App;
