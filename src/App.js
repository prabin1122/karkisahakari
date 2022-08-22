import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home.js';
import About from './pages/About/About.js';
import Contact from './pages/Contact/Contact.js';
import Services from './pages/Services/Services.js';
import Routee from './routes/Routee.js';
import NavBar from './components/Header/NavBar.js';
import TopHeader from './components/Header/TopHeader.js';
import MainMenu from './components/Header/MainMenu.js';
import Footer from './components/Footer/Footer.js';
import BottomFooter from './components/Footer/BottomFooter.js';


function App() {
  return (
    <div className="App">
      <TopHeader/>
      <MainMenu/>
      <Routee/>
      <Footer/>
      <BottomFooter/>
    </div>
  );
}

export default App;
