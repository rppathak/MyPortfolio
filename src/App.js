
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Project/>
      <Footer/>
    </div>
  );
}

export default App;
