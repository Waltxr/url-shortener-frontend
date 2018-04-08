import React from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

const AppWithRouter = withRouter(App)
const store = configureStore()

const AppInRouter = () => (
  <Router>
    <AppWithRouter />
  </Router>
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppInRouter />
    </Router>
  </Provider>,
document.getElementById('root')
);
