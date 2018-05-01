import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './scenes/Home';
import Login from './scenes/Login';
import MainMenu from './components/MainMenu/MainMenu';
import Grid from 'material-ui/Grid';

const App = () => (
  <Router>
    <MuiThemeProvider>
      <div>
        <MainMenu />

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </div>
    </MuiThemeProvider>
  </Router>
);
export default App;
