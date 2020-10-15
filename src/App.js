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
import Order from './components/Order/Order';
import ServiceList from './components/ServiceList/ServiceList';
import Review from './components/Review/Review';
import RequestedService from './components/Admin/RequestedService/RequestedService';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import NotFound from './components/NotFound/NotFound';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

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



        <PrivateRoute path="/order/:projectName">
        <Order></Order>
        </PrivateRoute>
        <PrivateRoute path="/orderDashboard">
        <Order></Order>
        </PrivateRoute>
        <PrivateRoute path="/serviceList">
        <ServiceList></ServiceList>
        </PrivateRoute>
        <PrivateRoute path="/review">
        <Review></Review>
        </PrivateRoute>
        <PrivateRoute path="/addService">
        <RequestedService></RequestedService>
        </PrivateRoute>
        <PrivateRoute path="/makeAdmin">
        <MakeAdmin></MakeAdmin>
        </PrivateRoute>
        <PrivateRoute path="/dashboard">
        <Dashboard></Dashboard>
        </PrivateRoute>
        <Route path="*">
        <NotFound></NotFound>
        </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
