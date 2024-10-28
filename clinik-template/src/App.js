import './App.css';
import Test from './Folder/10-Test/Test';
import Footer from './Folder/11-Footer/Footer';
import Navbar from './Folder/3-Nav/Navbar';
import Header from './Folder/4-Header/Header';
import About from './Folder/5-About/About';
import Service from './Folder/6-Service/Service';
import Future from './Folder/7-Future/Future';
import Team from './Folder/8-Team/Team';
import Appointment from './Folder/9-Appointment/Appointment';
import Topsection from './Folder/2-TOP/Topsection';

function App() {
  return (
    <div className="App">
      <Topsection/>
      <Navbar/>
      <Header/>
      <About/>
      <Service/>
      <Future/>
      <Team/>
      <Appointment/>
      <About/>
      <Test/>
      <Footer/>
     

    
    </div>
  );
}

export default App;
