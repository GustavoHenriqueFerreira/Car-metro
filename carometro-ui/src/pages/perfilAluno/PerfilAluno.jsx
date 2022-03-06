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
        axios('http://localhost:5000/api/alunos/'+ idAluno,{
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

                        <div className='info_aluno'>
                            <span>Nome:</span>
                            <span>RG:</span>
                            <span>Data da Matrícula:</span>
                            <span>Telefone:</span>
                            <span>Turma:</span>
                            <span>Comorbidade:</span>
                            <span>Comentário:</span>
                        </div>
                    </section>
                </div>
            </main>

            <Rodape />
        </div>
    );
}