import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/pages/home/home';
import Login from './components/pages/login/login';
import Aluno from './components/pages/aluno/aluno';

ReactDOM.render(
  <Router>
    <Route exact path="/" component={ Home }/>
    <Route path="/login" component={ Login }/>
    <Route path="/aluno" component={ Aluno }/>
  </Router>,
  document.getElementById('root')
)

serviceWorker.unregister();