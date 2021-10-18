import React from 'react';
import {Switch, Route, useHistory, useLocation} from 'react-router-dom';
import './app/ui-core/i18n';
import './App.css';

//Routes
import {MAIN} from './app/ui-core/utils/routes';

import MainPage from './app/screens/MainPage';

function App() {
  const location = useLocation();
  const {replace} = useHistory();

    if(location.pathname === "/"){
      replace("/dashboard")
    }

  return (
    <div className="App">
      <Switch>
        <Route exact path={`/${MAIN.dashboard}`} component={MainPage} />
      </Switch>
    </div>
    
  );
}

export default App;
