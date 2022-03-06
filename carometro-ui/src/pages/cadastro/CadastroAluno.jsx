import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../../assets/css/cadastroAluno.css'
import foto_aluno from '../../assets/img/foto_aluno.png';
import Cabecalho from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/rodape';

export default function CadastroAluno() {
    const [idTurma, setIdTurma] = useState('');
    const [nomeAluno, setNomeAluno] = useState('');
    const [rgAluno, setRgAluno] = useState('');
    const [telefoneAluno, setTelefoneAluno] = useState('');
    const [dataMatricula, setDataMatricula] = useState(new Date());
    const [comorbidade, setComorbidade] = useState('');
    const [aprovado, setAprovado] = useState(true);
    const [confirmacaoMensagem, SetMensagem] = useState('');
    /* const [comentario, setComentario] = useState(''); */

    function Cadastro(evento) {
        evento.preventDefault();

        SetMensagem('')
        /* setIsLoading(true); */

        axios.post('http://localhost:5000/api/Alunos', {
            idTurma: idTurma,
            nomeAluno: nomeAluno,
            rgAluno: rgAluno,
            telefoneAluno: telefoneAluno,
            dataMatricula: dataMatricula,
            comorbidade: comorbidade,
            aprovado: aprovado,
            /* comentario: comentario, */
        }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
            .then(resposta => {
                if (resposta.status === 201) {

                    console.log('Cadastrado');

                    setIdTurma('');
                    setNomeAluno('');
                    setRgAluno('');
                    setTelefoneAluno('')
                    setDataMatricula('');
                    setComorbidade('');
                    setAprovado(true);
                    /* setComentario(''); */

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

            <main className='main_aluno'>
                <div className='container_aluno espacamento_aluno'>
                    <div className='titulo'>
                        <h1 className='titulo_aluno'>Cadastro do Aluno</h1>
                    </div>

                    <section className="container_aluno box_aluno">
                        <form onSubmit={Cadastro}>

                            <div className="box_input_aluno">
                                <input className="input_aluno"
                                    value={nomeAluno}
                                    onChange={(campo) => setNomeAluno(campo.target.value)}
                                    name="nome"
                                    type="text"
                                    placeholder="Nome">
                                </input>

                                {/* <input className="input_aluno"
                                    name="email"
                                    type="email"
                                    placeholder="Email">
                                </input> */}

                                <input className="input_aluno"
                                    value={rgAluno}
                                    onChange={(campo) => setRgAluno(campo.target.value)}
                                    name="rg"
                                    placeholder="RG">
                                </input>

                                <input className="input_aluno cor_datetime"
                                    value={dataMatricula}
                                    onChange={(campo) => setDataMatricula(campo.target.value)}
                                    name="data da matricula"
                                    type="date"
                                    placeholder="Data da Matrícula">
                                </input>

                                <input className="input_aluno"
                                    value={telefoneAluno}
                                    onChange={(campo) => setTelefoneAluno(campo.target.value)}
                                    name="telefone"
                                    type="tel"
                                    placeholder="Telefone">
                                </input>

                                <input className="input_aluno"
                                    value={comorbidade}
                                    onChange={(campo) => setComorbidade(campo.target.value)}
                                    name="comorbidade"
                                    type="text"
                                    placeholder="Comorbidade">
                                </input>

                            </div>

                            <div className='selects'>
                                <select className='select_turma' value={idTurma} name="" id="">
                                    <option className='option_turma' value={idTurma}>Turma</option> 
                                    <option className='option_turma' value='1' onClick={(campo) => setIdTurma(campo.target.value)}>2° Ano</option> 
                                    <option className='option_turma' value='2' onClick={(campo) => setIdTurma(campo.target.value)}>9° Ano</option> 
                                    <option className='option_turma' value='3' onClick={(campo) => setIdTurma(campo.target.value)}>3° Ano</option>
                                    {/*<option className='option_turma' value="">EF I 1°C</option> <option className='option_turma' value={idTurma}>Turma</option> <option className='option_turma' value="">EF I 2°A</option> <option className='option_turma' value="">EF I 2°B</option> <option className='option_turma' value="">EF I 2°C</option>
                                    <option className='option_turma' value={idTurma}>Turma</option> <option className='option_turma' value="">EF I 3°A</option> <option className='option_turma' value="">EF I 3°B</option> <option className='option_turma' value="">EF I 3°C</option>
                                    <option className='option_turma' value="">Turma</option> <option className='option_turma' value="">EF I 4°A</option> <option className='option_turma' value="">EF I 4°B</option> <option className='option_turma' value="">EF I 4°C</option>
                                    <option className='option_turma' value="">Turma</option> <option className='option_turma' value="">EF I 5°A</option> <option className='option_turma' value="">EF I 5°B</option> <option className='option_turma' value="">EF I 5°C</option>
                                    <option className='option_turma' value="">Turma</option> <option className='option_turma' value="">EF II 6°A</option> <option className='option_turma' value="">EF II 6°B</option> <option className='option_turma' value="">EF II 6°C</option>
                                    <option className='option_turma' value="">Turma</option> <option className='option_turma' value="">EF II 7°A</option> <option className='option_turma' value="">EF II 7°B</option> <option className='option_turma' value="">EF II 7°C</option>
                                    <option className='option_turma' value="">Turma</option> <option className='option_turma' value="">EF II 8°A</option> <option className='option_turma' value="">EF II 8°B</option> <option className='option_turma' value="">EF II 8°C</option>
                                    <option className='option_turma' value="">Turma</option> <option className='option_turma' value="">EF II 9°A</option> <option className='option_turma' value="">EF II 9°B</option> <option className='option_turma' value="">EF II 9°C</option>
                                    <option className='option_turma' value="">Turma</option> <option className='option_turma' value="">EM 1°A</option> <option className='option_turma' value="">EM 1°B</option> <option className='option_turma' value="">EM 1°C</option>
                                    <option className='option_turma' value="">Turma</option> <option className='option_turma' value="">EM 2°A</option> <option className='option_turma' value="">EM 2°B</option> <option className='option_turma' value="">EM 2°C</option>
                                    <option className='option_turma' value="">Turma</option> <option className='option_turma' value="">EM 3°A</option> <option className='option_turma' value="">EM 3°B</option> <option className='option_turma' value="">EM 3°C</option> */}
                                </select>

                                <label for="arquivo">Escolher arquivo</label>
                                <input className="select_turma" type="file" name="arquivo" id="arquivo"></input>
                            </div>

                            <div className="box_btn_aluno">
                                <button type="submit" className="btn_aluno">Cadastrar</button>
                            </div>
                        </form>
                    </section>
                </div>
            </main>

            <Rodape />
        </div>
    );
}