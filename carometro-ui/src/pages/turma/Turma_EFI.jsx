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

    useEffect(buscarAlunos, [])

    return (
        <div>
            <Cabecalho />

            <main className='main_turma'>
                <h1 className='titulo_serie'>Séries</h1>
                <div class="linha-menu"></div>

                <section class="menu-series">
                    
                        <button 
                        value={idTurma} 
                        onClick={(campo) => setIdTurma(campo.target.value === 1)} 
                        className="serie-EFI">
                            1°
                        </button>

                        <button 
                        value={idTurma} 
                        onClick={(campo) => setIdTurma(campo.target.value === 2)} 
                        className="serie-EFI">
                            2°
                        </button>
                        
                        <button value={idTurma} onClick={(campo) => setIdTurma(campo.target.value === 3)} className="serie-EFI">
                            3°
                        </button>
                    
                    {/*  <Link to="/listagem" value='1' onChange={(campo) => setIdTurma(campo.target.value)} class="serie-EFI">
                        1°
                    </Link>
                    <Link to="/listagem" value='2' onChange={(campo) => setIdTurma(campo.target.value)} class="serie-EFI">
                        2°
                    </Link>
                    <Link to="/listagem" value='3' onChange={(campo) => setIdTurma(campo.target.value)} class="serie-EFI">
                        3°
                    </Link> */}
                    {/* <Link to="/listagem" class="serie-EFI">
                        4°
                    </Link>
                    <Link to="/listagem" class="serie-EFI">
                        5°
                    </Link> */}

                    <Link to="/perfil" className="espaco-aluno">
                        <div className="div-fotoaluno">
                            <img className="foto_aluno" src={foto_aluno} alt="" />
                        </div>

                        {
                            listaAlunos.map((aluno) => {
                                return (
                                    console.log('cheguei aqui'),
                                    <div className='container_nomeAluno'>
                                        <p className="nome_aluno">{aluno.nomeAluno}</p>
                                    </div>
                                )
                            })
                        }
                    </Link>
                </section>



            </main>

            <Rodape />
        </div>
    );
}