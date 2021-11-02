import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import RequestedService from './components/Admin/RequestedService/RequestedService';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Order from './components/Order/Order';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Review from './components/Review/Review';
import ServiceList from './components/ServiceList/ServiceList';


function App() {

  return (
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
  );
}

export default App;
