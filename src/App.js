import logo from './logo.svg';
import './App.css';
import {FaLocationDot} from "react-icons/fa6"

import Navbar from './components/Navbar';
import PresenterList from './components/PresenterList';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <p className="page-path"> <FaLocationDot /> IIIT Kottayam - Workshops / Admin / Presenter Validation</p>
      <PresenterList />
      <Footer />
    </div>
  );
}

export default App;
