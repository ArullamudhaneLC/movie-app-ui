import logo from './logo.svg';
import './App.css';
import Routes from './Routes';
import Nav from './components/Nav';
import { Router} from 'react-router-dom';
import history from './history';
import Header from './components/Header/Header';
import { useState } from 'react';
import Home from './components/Home/Home';

function App() {
  const [userData, setUserData] = useState({'loggedIn': false, 'userName': 'abc', 'timeOut': '' });
  console.log('ll',userData);
  return (

    <div className="App">
      <Router history ={history}>
        <div>
          <Header userData={userData} setUserData={setUserData} />
          {/* <Home></Home> */}
          <Routes/>
         
          </div>
      </Router>
    </div>
  );
}

export default App;
