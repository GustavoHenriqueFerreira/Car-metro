import '../../assets/css/listagemAluno.css'
import foto_aluno from '../../assets/img/foto_aluno.png';
import Cabecalho from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/rodape';
import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ListagemALuno() {
    // TESTANDO COM MOCK API
    /* const [listaAlunos, setListaAlunos] = useState([]);

    function buscarAlunos() {
        axios('https://6216e73471e7672e536e1d7f.mockapi.io/Aluno', {
            /* headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
            .then(resposta => {
                if (resposta.status === 200) {
                    console.log(resposta.data)
                    setListaAlunos(resposta.data)
                };
            })
            .catch(erro => console.log(erro));
    };
    useEffect(buscarAlunos, []); */

    const [listaAlunos, setListaAlunos] = useState([])
    const [idAluno, setIdAluno] = useState(0)

    buscarAlunos = () => {
        console.log('Realizando a chamada para a API')
        axios('http://localhost:5000/api/alunos/' + idAluno, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        }).then(response => {
            if (response.status === 200) {
                setListaAlunos(response.data)
            }
        })
            .catch(erro => console.log(erro))
    }


    return (
        <div>
            <Cabecalho />
            <div className='main_alunos'>
                <main>
                    <section>
                        <div className="container_alunos">
                            <div className="box_alunos">
                                <select className='select_alunos' name="" id="">
                                    <option className='option_turma' value="">Turma</option>
                                    <option className='option_turma' value="">1°A</option>
                                    <option className='option_turma' value="">1°B</option>
                                    <option className='option_turma' value="">1°C</option>
                                </select>
                                <div className="nome_pag">
                                    <h1 className='titulo_alunos'>Alunos</h1>
                                    <hr className='linha_alunos' />
                                </div>
                                <Link to="/cadastroAluno" className='btn_cadastrar'>Cadastrar</Link>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="container_fotos">
                            <div className="box_fotos">

                                {
                                    listaAlunos.map((aluno) => {
                                        return (
                                            <Link to="/perfil" className="espaco-aluno">
                                                <div className="div-fotoaluno">
                                                    <img className="foto_aluno" src={foto_aluno} alt="" />
                                                </div>

                                                <div className='container_nomeAluno'>
                                                    <p className="nome_aluno">{aluno.nomeAluno}</p>
                                                </div>
                                            </Link>
                                        )
                                    })
                                }

                                {/* <Link to="/perfil" className="espaco-aluno">
                                <div className="div-fotoaluno">
                                    <img className="foto_aluno" src={foto_aluno} alt="" />
                                </div>

                                <div className='container_nomeAluno'>
                                    <p className="nome_aluno">Gustavo Henrique</p>
                                </div>
                            </Link>
                            <Link to="/perfil" className="espaco-aluno">
                                <div className="div-fotoaluno">
                                    <img className="foto_aluno" src={foto_aluno} alt="" />
                                </div>

                                <div className='container_nomeAluno'>
                                    <p className="nome_aluno">Gustavo Henrique</p>
                                </div>
                            </Link>
                            <Link to="/perfil" className="espaco-aluno">
                                <div className="div-fotoaluno">
                                    <img className="foto_aluno" src={foto_aluno} alt="" />
                                </div>

                                <div className='container_nomeAluno'>
                                    <p className="nome_aluno">Gustavo Henrique</p>
                                </div>
                            </Link>
                            <Link to="/perfil" className="espaco-aluno">
                                <div className="div-fotoaluno">
                                    <img className="foto_aluno" src={foto_aluno} alt="" />
                                </div>

                                <div className='container_nomeAluno'>
                                    <p className="nome_aluno">Gustavo Henrique</p>
                                </div>
                            </Link>
                            <Link to="/perfil" className="espaco-aluno">
                                <div className="div-fotoaluno">
                                    <img className="foto_aluno" src={foto_aluno} alt="" />
                                </div>

                                <div className='container_nomeAluno'>
                                    <p className="nome_aluno">Gustavo Henrique</p>
                                </div>
                            </Link>
                            <Link to="/perfil" className="espaco-aluno">
                                <div className="div-fotoaluno">
                                    <img className="foto_aluno" src={foto_aluno} alt="" />
                                </div>

                                <div className='container_nomeAluno'>
                                    <p className="nome_aluno">Gustavo Henrique</p>
                                </div>
                            </Link> */}
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <Rodape />
            {/* <section>
                    <div>
                    {
                            listaAlunos.map((alunos) => {
                                return (
                                    <div className="consulta-ConPac">
                                        <h2>{alunos.idAluno} id do Aluno</h2>
                                        <li className="topicos-ConPac">Telefone: {alunos.telefone}</li>
                                        
                                        <li className="topicos-ConPac">Comorbidade: {alunos.comorbidade}</li>
                                        <li className="topicos-ConPac">foto Perfil: {alunos.fotoPerfil}</li>
                                        
                                        <li className="topicos-ConPac">Data da matrícula: {Intl.DateTimeFormat("pt-BR", {
                                            year: 'numeric', month: 'short', day: 'numeric',
                                            hour: 'numeric', minute: 'numeric',
                                            hour12: true
                                        }).format(new Date(alunos.dataMatricula))}</li>
                                        <li className="topicos-ConPac">Turma: {alunos.turmas[0].nomeTurma} {alunos.turmas[0].grade}</li>
                                        <li className="topicos-ConPac">Turno: {alunos.turmas[0].turno}</li>
                                        {/* <li className="topicos-ConPac">Situação: {alunos.situacoes[0].nomeSituacao}</li> 
                                    </div>
                                )
                            })
                        }
                    </div>
                </section> */}
        </div>
    );
}
