import React, { Component } from 'react';
import logo from './css/logo.svg';
import './css/App.css';
import Router from './Router.js';
import Footer from './components/Footer.jsx';
import 'bootstrap/dist/css/bootstrap.css';



import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react';



class App extends Component {

 

  render() {
   
    return (
      
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <div>  
        <Router/> 
        </div>
        <div>   
        <Footer/>
        </div>
        </div>         
    );
  }
}

export default App;
