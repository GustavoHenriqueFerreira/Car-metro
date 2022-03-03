import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch,
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import ListagemAluno from './pages/listagemAluno/ListagemAluno';
import Login from './pages/login/Login';
import Menu from './pages/menu/Menu';
import PerfilAluno from './pages/perfilAluno/PerfilAluno';
import CadastroProfessor from './pages/cadastro/CadastroProfessor';
import CadastroAluno from './pages/cadastro/CadastroAluno';
import Verificacao from './pages/verificacao/Verificacao';
/* import Turma from './pages/turma/Turma'; */
import NotFound from './pages/notFound/NotFound';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/listagem" component={ListagemAluno} /> {/* Home */}
        <Route exact path="/menu" component={Menu} /> {/* Menu com os 3 tipos de ensino */}
        <Route exact path="/perfil" component={PerfilAluno} /> {/* Perfil do aluno */}
        <Route exact path="/cadastroAluno" component={CadastroAluno} /> {/* Cadastro de alunos */}
        <Route exact path="/cadastroProfessor" component={CadastroProfessor} /> {/* Cadastro de professores */}
        <Route exact path="/verificacao" component={Verificacao} /> {/* Verificação da foto do aluno */}
        {/* <Route exact path="/turmas" component={Turma} /> {/* Todas as turmas cadastradas */}
        <Route path="/" component={Login}/> {/* Login */}
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
