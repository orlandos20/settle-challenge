import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from 'styled-components';
import {store, persistor} from './adapter/reduxHooks/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {light} from './app/ui-core/styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={light}>
          <Router>
            <App />
          </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
