import '../../assets/css/turma.css'
import Cabecalho from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/rodape';
import { useState, useEffect } from "react";
import axios from 'axios';

export default function Turma_EFII() {
    return (
        <div>
            <Cabecalho />

            <main className='main_turma'>
                <h1 className='titulo_serie'>Séries</h1>
                <div class="linha-menu"></div>
                
                <section class="menu-series">
                    <button class="serie-EFII">
                        6°
                    </button>
                    <button class="serie-EFII">
                        7°
                    </button>
                    <button class="serie-EFII">
                        8°
                    </button>
                    <button class="serie-EFII">
                        9°
                    </button>
                </section>
            </main>

            <Rodape />
        </div>
    );
}