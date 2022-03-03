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

                    <button className="grade1">
                        <p className="texto-grade">EM</p>
                    </button>
                    <button className="grade2">
                        <p className="texto-grade">EF I</p>
                    </button>
                    <button className="grade3">
                        <p className="texto-grade">EF II</p>
                    </button>

                </section>
            </main>

            <Rodape />
        </div>
    );
}