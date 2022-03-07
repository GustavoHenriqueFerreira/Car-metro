import { React, useState, useEffect, Component } from "react";
import '../../assets/css/perfilAluno.css'
import padrao from '../../assets/img/padrao.png';
import Cabecalho from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/rodape';
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

    /* export default class PerfilAluno extends Component {
        constructor(props) {
            super(props);
            this.state = {
                arquivo: '',
                base64img: '',
            };
        }
    
        enviarArquivo = () => {
            console.log('envio');
            if (this.state.arquivo !== '') {
                const formData = new FormData();
    
                //FormData  - maneira facil para construir um conjunto de chave/valor, para ser utilizado no método send().
    
                //FormaData.append Acrescenta um novo valor em uma chave existente dentro de um objeto FormData, ou adiciona a chave se ela ainda não existir.
    
                formData.append(
                    'arquivo', // chave, nome do arquivo que será enviado.
                    this.state.arquivo, //valor, arquivo fisico
                );
    
                axios
                    .post('http://localhost:5000/api/fotoAlunos/11', formData, {
                        headers: {
                            Authorization: 'Bearer ' + localStorage.getItem('usuario-login'),
                        },
                    })
                    .then(console.log('Upload Realizado'))
                    .catch((erro) => console.log(erro))
                    .then(this.buscaImg);
            } else {
                console.log('Nenhum arquivo selecionado.');
            }
        };
    
        buscaImg = () => {
            axios('http://localhost:5000/api/FotoAlunos/4', {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('usuario-login'),
                },
            })
                .then((resposta) => {
                    if (resposta.status === 201) {
                        this.setState({ base64img: resposta.data });
                    }
                })
                .catch((erro) => console.log(erro));
        };
    
        componentDidMount() {
            this.buscaImg();
        }
    
        atualizaState = (event) => {
            console.log(event);
            this.setState({ arquivo: event.target.files[0] });
        };
    
        render() { */
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
                        {/* <label onChange={this.atualizaState} for="arquivo">Escolher arquivo</label>
                            <input onChange={this.atualizaState} className="select_turma" type="file" name="arquivo" id="arquivo"></input>
                            <input type="file" onChange={this.atualizaState} />
                            <button onClick={this.enviarArquivo}>Upload!</button>
                            <img className="radius-img"
                                alt="Imagem do Perfil"
                                src={`data:image;base64,${this.state.base64img}`}
                            /> */}
                    </section>
                </div>
            </main>

            <Rodape />
        </div>
    );
}