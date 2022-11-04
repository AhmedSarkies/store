import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Slider from "./components/Slider";
import "./css/main/main.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Sidebar />
    </div>
  );
}

export default App;
