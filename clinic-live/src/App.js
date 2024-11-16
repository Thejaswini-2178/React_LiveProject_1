import './App.css'
import { Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Services from './Components/Services';
import Appointment from './Components/Appointment';

const App = () => {
  return (
    <div className='App'>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/services' element={<Services />}/>
      <Route path="/contact" element={<Contact />} />
      <Route path='/appointment' element={<Appointment />}/>
      
    </Routes>
    <Footer/>

    </div>
  );
};
export default App;


