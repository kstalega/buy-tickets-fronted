import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PermanentDrawer from './components/ScenesContainer/ScenesContainer';

const App = () => (
  <Router>
    <MuiThemeProvider>
      <PermanentDrawer />
    </MuiThemeProvider>
  </Router>
);
export default App;
