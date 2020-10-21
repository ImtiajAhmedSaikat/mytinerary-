import React from 'react';
import './App.css';
import Landing from './components/Landing';
import Cities from'./components/Cities';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>

        <div className="App">

          <Switch>
          <Route exact path='/' component={Landing}/>
          <Route  path='/cities' component={Cities} />
          
          </Switch>

        </div>

      </BrowserRouter>

  );
}

export default App;
