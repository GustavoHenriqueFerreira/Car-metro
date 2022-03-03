import '../../assets/css/turma.css'
import Cabecalho from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/rodape';
import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Turma_EM() {
    return (
        <div>
            <Cabecalho />

            <main className='main_turma'>
                <h1 className='titulo_serie'>Séries</h1>
                <div class="linha-menu"></div>
                
                <section class="menu-series">
                    <Link to="/listagem" class="serie-EM">
                        1°
                    </Link>
                    <Link to="/listagem" class="serie-EM">
                        2°
                    </Link>
                    <Link to="/listagem" class="serie-EM">
                        3°
                    </Link>
                </section>
            </main>

            <Rodape />
        </div>
    );
}