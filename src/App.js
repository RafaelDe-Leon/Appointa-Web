import React from 'react';
import './App.css';
import ProviderSide from './components/Provider';
import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';

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
        <Nav />
        <div>
          <Switch>
            <Route exact path='/' component={Home} />

            <Route exact path='/provider' component={ProviderSide} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
