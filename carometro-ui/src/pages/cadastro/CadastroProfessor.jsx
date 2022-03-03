import '../../assets/css/cadastroProfessor.css'
import foto_aluno from '../../assets/img/foto_aluno.png';
import Cabecalho from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/rodape';
import { useState, useEffect } from "react";
import axios from 'axios';

export default function CadastroProfessor() {
    return (
        <div>
            <Cabecalho />

            <main className='main_professor'>
                <div className='container_professor espacamento_professor'>
                    <div className='titulo'>
                        <h1 className='titulo_professor'>Cadastro do Professor</h1>
                    </div>

                    <section className="container_professor box_professor">
                        <form className="">

                            <div className="box_input_professor">
                                <input className="input_professor"
                                    name="nome"
                                    type="text"
                                    placeholder="Nome">
                                </input>

                                <input className="input_professor"
                                    name="email"
                                    type="email"
                                    placeholder="Email">
                                </input>

                                <input className="input_professor"
                                    name="senha"
                                    type="password"
                                    placeholder="Senha">
                                </input>

                            </div>

                            <div class="box_btn_professor">
                                <button class="btn_professor">Cadastrar</button>
                            </div>
                        </form>
                    </section>
                </div>
            </main>

            <Rodape />
        </div>
    );
}