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

const App = () => (
  <Router>
    <MuiThemeProvider>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>

        <MainMenu />

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </div>
    </MuiThemeProvider>
  </Router>
);
export default App;
