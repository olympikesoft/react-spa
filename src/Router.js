import React, { Component } from 'react';
import { BrowserRouter as Routers, Switch, Route, Link, Redirect  } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Nav from './components/Nav';
import DashboardUser from './pages/Dashboard_Profile';
import {requireAuth, requireOrder} from './actions/index';


class Router extends Component {
    render(){
        return(
        <Routers>
        <div>
        <Nav />
        
           <Switch>
              <Route exact path='/' component={Home} />
             <Route exact path='/Login'  render={() => (
  requireAuth() ? (
    <Login/>
  ) : (    <Redirect to="DashboardUser"/>)
              )
            }/>
              <Route exact path='/register' component={Register}/>
            
           </Switch>
        </div>
     </Routers>
        );
    }


}
 export default Router;   
