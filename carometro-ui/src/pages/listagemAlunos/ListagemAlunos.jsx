import '../../assets/css/teste.css'
import { useState, useEffect } from "react";
import axios from 'axios';

export default function ConsultaPac() {
    const [listaAlunos, setListaAlunos] = useState([]);

    function buscarAlunos() {
        axios('https://6216e73471e7672e536e1d7f.mockapi.io/Aluno', { 
            /* headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            } */
        })
            .then(resposta => {
                if (resposta.status === 200) {
                     console.log(resposta.data)
                    setListaAlunos(resposta.data)
                };
            })
            .catch(erro => console.log(erro));
    };

    useEffect(buscarAlunos, []);

    return (
        <div>
            <main>
                <section>
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
                                        {/* <li className="topicos-ConPac">Situação: {alunos.situacoes[0].nomeSituacao}</li> */}
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            </main>
        </div>
    );
}