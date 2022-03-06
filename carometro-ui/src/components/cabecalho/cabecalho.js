import '../../assets/css/headerFooter.css';
import logo from '../../assets/img/logo 2.png';
import logout from '../../assets/img/Vector.png'
import { Link } from 'react-router-dom';

export default function Cabecalho() {

    return (
        <div className='cabecalho'>
            <header>
                <section className="container-header">
                    <div className="conteudo-header"></div>
                    <div className="conteudo-header"><Link to="/menu"><img src={logo} alt="Logo Sonedev" /></Link></div>
                    <div className="logout-header"><img src={logout} alt="Símbolo Logout" /></div>
                </section>
            </header>
        </div>
    )
}