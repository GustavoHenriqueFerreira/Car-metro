import '../../assets/css/turma.css'
import Cabecalho from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/rodape';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from 'axios';

export default function Turma_EFI() {
    return (
        <div>
            <Cabecalho />

            <main className='main_turma'>
                <h1 className='titulo_serie'>Séries</h1>
                <div className="linha-menu"></div>
                
                <section className="menu-series">
                    <Link to="/listagem" className="serie-EFI">
                        1°
                    </Link>
                    <Link to="/listagem" className="serie-EFI">
                        2°
                    </Link>
                    <Link to="/listagem" className="serie-EFI">
                        3°
                    </Link>
                    <Link to="/listagem" className="serie-EFI">
                        4°
                    </Link>
                    <Link to="/listagem" className="serie-EFI">
                        5°
                    </Link>
                </section>
            </main>

            <Rodape />
        </div>
    );
}