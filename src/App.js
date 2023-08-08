import React, { Component } from 'react';
//import logo from './logo.svg';
//import Navbar from 'navbar-react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link,  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Create from './components/create.component';
import Edit from './components/edit.component';
import List from './components/list.component';

class App extends Component{
  render(){
    return(
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className='navbar-brand'>Vehicle Crud By Ishan </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Create Vehicle</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/edit-vehicle/:id'} className="nav-link">Edit Vehicle</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/vehicle-list'} className="nav-link"> Vehicle-List</Link>
                </li>
              </ul>
            </div>
          </nav>

          <br/>

          <h2> Welcome</h2>


          {/* <Routes>
          
          <Route index element={<Create />} />
          <Route path="/create-vehicle" element={<Create/>} />
          <Route path="/edit-vehicle/:id" element={<Edit />} />
          <Route path="/vehicle-list" element={<List />} />
        </Routes> */}

          <Switch>
            <Route exact path="/" component={Create} />
            <Route exact path="/create-vehicle" component={Create} />
            <Route exact path="/edit-vehicle/:id" component={Edit} />
            <Route exact path="/vehicle-list" component={List} />
          </Switch>
        </div>
      </Router> 
    )
  }
}
export default App;
