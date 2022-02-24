import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch,
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import ListagemAlunos from './pages/listagemAlunos/ListagemAlunos';
import NotFound from './pages/notFound/NotFound'

const routing = (
  <Router>
    <div>
      <Switch>
        {/* <Route path="/login" component={Login}/> {/* Login */}
        <Route exact path="/" component={ListagemAlunos} /> {/* Home */}
        <Route path="/notFound" component={NotFound} /> {/* Not Found */}
        <Redirect to="/notFound" /> {/* Redireciona para Not Found caso não encontre nenhuma rota */}
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
