import 'aframe'
import React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App Site">
          <div className="Site-content">
            
            
            <Switch>
              <Route path="/" component={Home} exact />
            </Switch>
          </div>
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
