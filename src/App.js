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
import AdminDashBoard from './components/Admin/AdminDashBoard/AdminDashBoard';
import RequestedService from './components/Admin/RequestedService/RequestedService';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';

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
        <Route path="/orderDashboard">
        <Order></Order>
        </Route>
        <Route path="/serviceList">
        <ServiceList></ServiceList>
        </Route>
        <Route path="/review">
        <Review></Review>
        </Route>
        <Route path="/admindashboard">
        <AdminDashBoard></AdminDashBoard>
        </Route>
        <Route path="/addService">
        <RequestedService></RequestedService>
        </Route>
        <Route path="/makeAdimin">
        <MakeAdmin></MakeAdmin>
        </Route>
        <Route path="*">
        <NotFound></NotFound>
        </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
