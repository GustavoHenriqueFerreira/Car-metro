import '../../assets/css/turma.css'
import '../../assets/css/listagemAluno.css'
import Cabecalho from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/rodape';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';
import foto_aluno from '../../assets/img/foto_aluno.png'

export default function Turma_EFI() {
    const [listaAlunos, setListaAlunos] = useState([]);
    const [listaTurmas, setListaTurmas] = useState([]);
    const [idTurma, setIdTurma] = useState([]);

    function buscarAlunos() {

        console.log('Realizando a chamada para a API')
        axios('http://localhost:5000/api/Turma/' + idTurma, {
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

    /* function buscarTurmas() {
        console.log('Realizando a chamada para a API')
        axios('http://localhost:5000/api/Turma', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        }).then(response => {
            if (response.status === 200) {
                setListaTurmas(response.data)
            }
        })
            .catch(erro => console.log(erro))
    } */

    useEffect(buscarAlunos, [])

    console.log(idTurma);

    return (
        <div>
            <Cabecalho />
            <main className='main_turma'>
                <h1 className='titulo_serie'>Séries</h1>
                <div className="linha-menu"></div>

                <section class="menu-series">
                    {/* {
                        listaTurmas.map((turma) => {
                            return (
                                console.log('cheguei aqui'),
                                <div className='serie-EF'>
                                    <span className='nome_aluno'>{turma.nomeTurma}</span>
                                </div>
                            )
                        })
                    } */}
                    <button
                        value={idTurma}
                        onClick={() => setIdTurma(1)}
                        className="serie-EFI">
                        1°
                    </button>

                    <button
                        value={idTurma}
                        onClick={() => setIdTurma(2)}
                        className="serie-EFI">
                        2°
                    </button>

                    <button
                        value={idTurma}
                        onClick={() => setIdTurma(3)}
                        className="serie-EFI">
                        3°
                    </button>

                    <div className="SessaoSeries">

                        {
                            listaAlunos.map((aluno) => {
                                return (
                                    console.log('cheguei aqui'),
                                    <div className="espaco-aluno">
                                        <div className="div-fotoaluno">
                                            <img className="foto_aluno" src={foto_aluno} alt="" />
                                        </div>

                                        <div className='container_nomeAluno'>
                                            <p className="nome_aluno">{aluno.nomeAluno}</p>
                                        </div>
                                    </div>
                                    )
                                })
                            }
                            {/* <div className='cardAluno'>
                                <div className="div-fotoaluno">
                                <img className="foto_aluno" src={foto_aluno} alt="" />
                            </div>

                                <div className='container_nomeAluno'>
                                    <p className="nome_aluno">{aluno.nomeAluno}</p>
                                </div>
                            </div> */}

                    </div>
                </section>
            </main>

            <Rodape />
        </div>
    );
}