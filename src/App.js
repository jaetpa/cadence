import './App.css';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import ContentGrid from './ContentGrid/ContentGrid';

function App() {
  return (
    <div className="App  w-100 h-screen">
      <Navbar/>
      <Hero/>
      <ContentGrid />
    </div>
  );
}

export default App;
