import React from 'react';
import '../../assets/css/headerFooter.css';
import logo from '../../assets/img/logo.png';

export default function Cabecalho() {

    return (
        <header>
            <section class="container-header">
                <div class="conteudo-header"></div>
                <div class="conteudo-header"><img src={logo} alt="Logo Sonedev"/></div>
                <div class="logout-header"><img src="assets/logout.png" alt="Símbolo Logout"/></div>
            </section>
        </header>
    )
}