import '../../assets/css/turma.css'
import Cabecalho from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/rodape';
import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Turma_EFII() {
    return (
        <div>
            <Cabecalho />

            <main className='main_turma'>
                <h1 className='titulo_serie'>Séries</h1>
                <div class="linha-menu"></div>
                
                <section class="menu-series">
                    <Link to="/listagem" to="/listagem" class="serie-EFII">
                        6°
                    </Link>
                    <Link to="/listagem" class="serie-EFII">
                        7°
                    </Link>
                    <Link to="/listagem" class="serie-EFII">
                        8°
                    </Link>
                    <Link to="/listagem" class="serie-EFII">
                        9°
                    </Link>
                </section>
            </main>

            <Rodape />
        </div>
    );
}