import '../../assets/css/cadastroProfessor.css'
import foto_aluno from '../../assets/img/foto_aluno.png';
import Cabecalho from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/rodape';
import { useState, useEffect } from "react";
import axios from 'axios';

export default function CadastroProfessor() {
    const [idTipoUsuario, setIdTipoUsuario] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState(0);
    const [confirmacaoMensagem, SetMensagem] = useState('');

    function Cadastro(evento) {
        evento.preventDefault();

        SetMensagem('')
        /* setIsLoading(true); */

        axios.post('http://localhost:5000/api/Alunos', {
            idTipoUsuario: idTipoUsuario,
            nome: nome,
            email: email,
            senha: senha,
        }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
            .then(resposta => {
                if (resposta.status === 201) {

                    console.log('Cadastrado');

                    setIdTipoUsuario(1);
                    setNome('');
                    setEmail('');
                    setSenha('');

                    /* setIsLoading(false); */
                    SetMensagem('Cadastrado com sucesso!')
                }
            })

            .catch(erro => console.log(erro), setInterval(() => {
                /* setIsLoading(false) */
                SetMensagem('Não foi possível realizar o cadastrado!')
            }, 5000));
    };

    return (
        <div>
            <Cabecalho />

            <main className='main_professor'>
                <div className='container_professor espacamento_professor'>
                    <div className='titulo'>
                        <h1 className='titulo_professor'>Cadastro do Professor</h1>
                    </div>

                    <section className="container_professor box_professor">
                        <form className="">

                            <div className="box_input_professor">
                                <input className="input_professor"
                                    name="nome"
                                    type="text"
                                    placeholder="Nome">
                                </input>

                                <input className="input_professor"
                                    name="email"
                                    type="email"
                                    placeholder="Email">
                                </input>

                                <input className="input_professor"
                                    name="senha"
                                    type="password"
                                    placeholder="Senha">
                                </input>

                            </div>

                            <div className="box_btn_professor">
                                <button className="btn_professor">Cadastrar</button>
                            </div>
                        </form>
                    </section>
                </div>
            </main>

            <Rodape />
        </div>
    );
}