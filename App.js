// import './App.scss';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home'
import Project from './Components/Project/Project';
import Footer from './Components/Footer/Footer';
import Clients from './Components/Clients/Clients';

import './Styles/app.scss'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
<Header/>
<br/>
      <Home/>
 <br/>
 <Project/> 
 <br/>    
  <Clients/>

<Footer/>
      </Router>
    </div>
  );
}

export default App;
