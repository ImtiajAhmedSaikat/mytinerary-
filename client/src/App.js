import React from 'react';
import './App.css';
import Landing from './components/Landing';
import Createaccount from "./components/Createaccount";
import Cities from'./components/Cities';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Itinerary from './components/Itinerary';
import Activity from './components/Activity';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>

        <div className="App">

          <Switch>
          <Route exact path='/' component={Landing}/>
          <Route  path="/register"component={Createaccount}/>
          <Route  path="/login"component={Login}/>
          <Route  path='/cities' component={Cities} />
          <Route path="/itineraries/:itineraryId"component={Itinerary}/>
          <Route path="/activities/:itineraryId"component={Activity}/>

          
          </Switch>

        </div>

      </BrowserRouter>

  );
}

export default App;
