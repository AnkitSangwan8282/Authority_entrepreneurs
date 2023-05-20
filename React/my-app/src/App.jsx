import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import BarGraph from "./Components/Chart"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <BarGraph/>
      <Footer/>
    </div>
  );
}

export default App;
