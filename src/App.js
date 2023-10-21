import React from 'react';
import './App.css';
import ProviderSide from './components/Provider';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/provider' component={ProviderSide} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
