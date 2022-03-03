import '../../assets/css/cadastroAluno.css'
import foto_aluno from '../../assets/img/foto_aluno.png';
import Cabecalho from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/rodape';
import { useState, useEffect } from "react";
import axios from 'axios';

export default function CadastroAluno() {
    return (
        <div>
            <Cabecalho />

            <main className='main_aluno'>
                <div className='container_aluno espacamento_aluno'>
                    <div className='titulo'>
                        <h1 className='titulo_aluno'>Cadastro do Aluno</h1>
                    </div>

                    <section className="container_aluno box_aluno">
                        <form className="">

                            <div className="box_input_aluno">
                                <input className="input_aluno"
                                    name="nome"
                                    type="text"
                                    placeholder="Nome">
                                </input>

                                <input className="input_aluno"
                                    name="email"
                                    type="email"
                                    placeholder="Email">
                                </input>

                                <input className="input_aluno"
                                    name="rg"
                                    placeholder="RG">
                                </input>

                                <input className="input_aluno"
                                    name="data da matricula"
                                    type="date"
                                    placeholder="Data da Matrícula">
                                </input>

                                <input className="input_aluno"
                                    name="telefone"
                                    type="tel"
                                    placeholder="Telefone">
                                </input>

                                <input className="input_aluno"
                                    name="comorbidade"
                                    type="text"
                                    placeholder="Comorbidade">
                                </input>

                            </div>

                            <div className='selects'>
                                <select className='select_turma' name="" id="">
                                    <option className='option_turma' value="">Turma</option> <option className='option_turma' value="">EF I 1°A</option> <option className='option_turma' value="">EF I 1°B</option> <option className='option_turma' value="">EF I 1°C</option>
                                    <option className='option_turma' value="">Turma</option> <option className='option_turma' value="">EF I 2°A</option> <option className='option_turma' value="">EF I 2°B</option> <option className='option_turma' value="">EF I 2°C</option>
                                    <option className='option_turma' value="">Turma</option> <option className='option_turma' value="">EF I 3°A</option> <option className='option_turma' value="">EF I 3°B</option> <option className='option_turma' value="">EF I 3°C</option>
                                    <option className='option_turma' value="">Turma</option> <option className='option_turma' value="">EF I 4°A</option> <option className='option_turma' value="">EF I 4°B</option> <option className='option_turma' value="">EF I 4°C</option>
                                    <option className='option_turma' value="">Turma</option> <option className='option_turma' value="">EF I 5°A</option> <option className='option_turma' value="">EF I 5°B</option> <option className='option_turma' value="">EF I 5°C</option>
                                    <option className='option_turma' value="">Turma</option> <option className='option_turma' value="">EF II 6°A</option> <option className='option_turma' value="">EF II 6°B</option> <option className='option_turma' value="">EF II 6°C</option>
                                    <option className='option_turma' value="">Turma</option> <option className='option_turma' value="">EF II 7°A</option> <option className='option_turma' value="">EF II 7°B</option> <option className='option_turma' value="">EF II 7°C</option>
                                    <option className='option_turma' value="">Turma</option> <option className='option_turma' value="">EF II 8°A</option> <option className='option_turma' value="">EF II 8°B</option> <option className='option_turma' value="">EF II 8°C</option>
                                    <option className='option_turma' value="">Turma</option> <option className='option_turma' value="">EF II 9°A</option> <option className='option_turma' value="">EF II 9°B</option> <option className='option_turma' value="">EF II 9°C</option>
                                    <option className='option_turma' value="">Turma</option> <option className='option_turma' value="">EM 1°A</option> <option className='option_turma' value="">EM 1°B</option> <option className='option_turma' value="">EM 1°C</option>
                                    <option className='option_turma' value="">Turma</option> <option className='option_turma' value="">EM 2°A</option> <option className='option_turma' value="">EM 2°B</option> <option className='option_turma' value="">EM 2°C</option>
                                    <option className='option_turma' value="">Turma</option> <option className='option_turma' value="">EM 3°A</option> <option className='option_turma' value="">EM 3°B</option> <option className='option_turma' value="">EM 3°C</option>
                                </select>

                                <input className="select_turma"
                                    name="arquivo"
                                    type="file"
                                    placeholder="Escolher arquivo">
                                </input>
                            </div>

                            <div class="box_btn_aluno">
                                <button type="button" class="btn_aluno">Cadastrar</button>
                            </div>
                        </form>

                        {/* <form>
                            <div>
                                <input id="telNo" name="telNo" type="tel" required/>
                                    <span class="validity"></span>
                                    <button>cadastrar</button>
                            </div>
                        </form> */}
                    </section>
                </div>
            </main>

            <Rodape />
        </div>
    );
}