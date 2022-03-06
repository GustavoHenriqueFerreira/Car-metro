import '../../assets/css/listagemAluno.css'
import foto_aluno from '../../assets/img/foto_aluno.png';
import Cabecalho from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/rodape';
import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ListagemALuno() {
   
    const [listaAlunos, setListaAlunos] = useState([])
        function buscarAlunos() {
            console.log('Realizando a chamada para a API')
            axios('http://localhost:5000/api/alunos/',{
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
    
        useEffect(buscarAlunos, [])

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
                                {/* <Link to="/cadastroProfessor" className='btn_cadastrar'>Cadastrar Professor</Link> */}
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="container_fotos">
                            <div className="box_fotos">
                            {/* {
                                    this.state.listaAlunos.map((aluno) => {
                                        return (
                                            console.log('cheguei aqui'),
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
                                } */}
                                 <Link to="/perfil" className="espaco-aluno">
                                    <div className="div-fotoaluno">
                                        <img className="foto_aluno" src={foto_aluno} alt="" />
                                    </div>

                                    <div className='container_nomeAluno'>
                                        <p className="nome_aluno">Gustavo Henrique</p>
                                    </div>
                                </Link>
                              
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <Rodape />
        </div>
    );
}
