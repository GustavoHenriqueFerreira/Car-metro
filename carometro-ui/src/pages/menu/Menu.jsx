import { Link } from 'react-router-dom';
import '../../assets/css/menu.css'
import Cabecalho from "../../components/cabecalho/cabecalho";
import Rodape from "../../components/rodape/rodape";

export default function Menu() {
    return (
        <div>
            <Cabecalho />

            <main className='main_menu'>
                <h1 className='menu'>Menu</h1>
                <div className="linha-menu"></div>

                <section className="menu-grades">

                    <Link to="/turma_EM" className="grade1">
                        <p className="texto-grade">EM</p>
                    </Link>
                    <Link to="/turma_EFII" className="grade2">
                        <p className="texto-grade">EF II</p>
                    </Link>
                    <Link to="/turma_EFI" className="grade3">
                        <p className="texto-grade">EF I</p>
                    </Link>

                </section>
            </main>

            <Rodape />
        </div>
    );
}