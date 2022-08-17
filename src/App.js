import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home.js';
import About from './pages/About/About.js';
import Contact from './pages/Contact/Contact.js';
import Services from './pages/Services/Services.js';
import NavBar from './components/NavigationBar/NavBar.js';


function App() {
  return (
    <div className="App">
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path='/services' element={<Services/>} />
      </Routes>
    </div>
  );
}

export default App;
