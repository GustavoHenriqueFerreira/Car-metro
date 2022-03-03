import { Component } from 'react';
import React from 'react';
import axios from 'axios';
import { parseJwt, usuarioAutenticado } from '../../services/auth';

import '../../assets/css/login.css'
import logo from '../../assets/img/logo 2.png';
import undraw from '../../assets/img/undraw_education_f8ru 1.png';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            /* email: 'adm@email.com',
            senha: 'adm123', */
            erroMensagem: '',
            isLoading: false
        };
    };

    // Função que faz a chamada para a API para realiza o login
    efetuaLogin = (event) => {
        // ignora o comportamento padrão do navegador (recarregar a página, por exemplo)
        event.preventDefault();

        this.setState({ erroMensagem: '', isLoading: true });

        axios.post('http://localhost:5000/api/Login', {
            email: this.state.email,
            senha: this.state.senha
        })

            // recebe todo o conteúdo da resposta da requisição na variável resposta
            .then(resposta => {
                // verifico se o status code dessa resposta é igual a 200
                if (resposta.status === 200) {
                    // se sim, exibe no console do navegador o token do usuário logado,
                    console.log('Meu token é: ' + resposta.data.token);
                    // salva o valor do token no localStorage
                    localStorage.setItem('usuario-login', resposta.data.token);
                    // e define que a requisição terminou
                    this.setState({ isLoading: false });

                    // define a variável base64 que vai receber o payload do token
                    let base64 = localStorage.getItem('usuario-login').split('.')[1];
                    // exibe no console do navegador o valor em base64
                    console.log(base64);

                    if (parseJwt().role === '1' ) {
                        this.props.history.push('/');
                        console.log('estou logado: ' + usuarioAutenticado())
                    }

                    /* switch (parseJwt().role) {
                        case '1':
                            this.props.history.push('/consultasAdm');
                            console.log(usuarioAutenticado())
                            break;

                        case '2':
                            this.props.history.push('/');
                            console.log(usuarioAutenticado())
                            break;

                        case '3':
                            this.props.history.push('/consultasMed');
                            console.log(usuarioAutenticado())
                            break;

                        default:
                            this.props.history.push('/');
                            console.log(usuarioAutenticado())
                            break;
                    } */
                }
            })

            // Caso haja um erro,
            .catch(() => {
                // define o valor do state erroMensagem com uma mensagem personalizada
                this.setState({ erroMensagem: 'E-mail e/ou senha inválidos!', isLoading: false })
            })
    };

    atualizaStateCampo = (campo) => {
        this.setState({ [campo.target.name]: campo.target.value })
    };

    render() {

        return (
            <div>
                <div className="container_login">
                    <div className='background'>
                        <img className="undraw" src={undraw} alt=""></img>
                    </div>

                    <div className='logar'>
                        <div>
                            <img className="logo" src={logo} alt="" />
                        </div>

                        <div className="box_login">
                            <form className="" onSubmit={this.efetuaLogin}>

                                <div className="box_input">
                                    <input className="input_login"
                                        value={this.state.email}
                                        onChange={this.atualizaStateCampo}
                                        name="email"
                                        type="email"
                                        placeholder="Email">
                                    </input>

                                    <input className="input_login"
                                        value={this.state.senha}
                                        onChange={this.atualizaStateCampo}
                                        name="senha"
                                        type="password"
                                        placeholder="Senha">
                                    </input>
                                </div>

                                <div class="box_btn">
                                    <button type="submit" class="btn_login">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
};