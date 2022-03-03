import '../../assets/css/turma.css'
import Cabecalho from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/rodape';
import { useState, useEffect } from "react";
import axios from 'axios';

export default function Turma_EFI() {
    return (
        <div>
            <Cabecalho />

            <main className='main_turma'>
                <h1 className='titulo_serie'>Séries</h1>
                <div class="linha-menu"></div>
                
                <section class="menu-series">
                    <button class="serie-EFI">
                        1°
                    </button>
                    <button class="serie-EFI">
                        2°
                    </button>
                    <button class="serie-EFI">
                        3°
                    </button>
                    <button class="serie-EFI">
                        4°
                    </button>
                    <button class="serie-EFI">
                        5°
                    </button>
                </section>
            </main>

            <Rodape />
        </div>
    );
}