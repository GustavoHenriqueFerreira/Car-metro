import '../../assets/css/perfilAluno.css'
import padrao from '../../assets/img/padrao.png';
import Cabecalho from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/rodape';
import { useState, useEffect } from "react";
import axios from 'axios';


export default function PerfilAluno() {

    const [listaAlunos, setListaAlunos] = useState([])
    const [idAluno, setIdAluno] = useState("0")

    function buscarAlunos() {
        console.log('Realizando a chamada para a API, buscando aluno')

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

    useEffect(buscarAlunos, [])


    return (
        <div>
            <Cabecalho />

            <main className='main_perfil'>
                <div className='container_aluno espacamento_perfil'>
                    <div className='titulo'>
                        <h1 className='titulo_aluno'>Perfil do aluno</h1>
                    </div>
                    <section className='perfil_aluno'>
                        <div className='foto'>
                            <img src={padrao} alt="" />
                        </div>
                        {
                           listaAlunos.map((aluno) => {
                            return (

                            <div className='info_aluno'>
                                <span>Nome:{aluno.NomeAluno}</span>
                                <span>RG:{aluno.RgAluno}</span>
                                <span>Data da Matrícula:{aluno.DataMatricula}</span>
                                <span>Telefone:{aluno.TelefoneAluno}</span>
                                <span>IdTurma:{aluno.IdTurma}</span>
                                <span>Comorbidade:{aluno.Comorbidade}</span>
                                <span>Comentário:{aluno.Comentario}</span>
                            </div>
                            )
                           })
                        }
                    </section>
                </div>
            </main>

            <Rodape />
        </div>
    );
}