import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import { createContext } from 'react';
import { useState } from 'react';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

export const UserContext = createContext(); 
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
        <Route path="/login">
      <Login></Login>
        </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
