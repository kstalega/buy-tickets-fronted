import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import ScenesContainer from './components/ScenesContainer/ScenesContainer';
import reducers from './reducers';

const defaultState = {
  auth: {
    logged: false,
  },
};

const store = createStore(reducers, defaultState, applyMiddleware(ReduxThunk));

const App = () => (
  <Provider store={store}>
    <Router>
      <ScenesContainer />
    </Router>
  </Provider>
);
export default App;
