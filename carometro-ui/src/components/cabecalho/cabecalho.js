import '../../assets/css/headerFooter.css';
import logo from '../../assets/img/logo 2.png';
import logout from '../../assets/img/Vector.png'
import { Link } from 'react-router-dom';

export default function Cabecalho() {

    return (
        <div className='cabecalho'>
            <header>
                <section class="container-header">
                    <div class="conteudo-header"></div>
                    <div class="conteudo-header"><Link to="/menu"><img src={logo} alt="Logo Sonedev" /></Link></div>
                    <div class="logout-header"><img src={logout} alt="Símbolo Logout" /></div>
                </section>
            </header>
        </div>
    )
}