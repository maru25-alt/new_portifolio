import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import DownloadResume from './Components/DownloadResume'; 

ReactDOM.render(
    <Router>
       <Switch>
          <Route path="/downloadResume">
            <DownloadResume />
          </Route>
          <Route exact path="/">
            <App/>
          </Route>
        </Switch>
    </Router>
, document.getElementById('root'));
registerServiceWorker();
