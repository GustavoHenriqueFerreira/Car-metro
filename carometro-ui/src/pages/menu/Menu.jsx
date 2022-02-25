import Cabecalho from "../../components/cabecalho/cabecalho";
import Rodape from "../../components/rodape/rodape";

export default function Menu() {
    return (
        <div>
            <Cabecalho />

            <h1>Menu</h1>
            <div class="linha-menu"></div>

            <section class="menu-grades">

                <button class="grade1">
                    <p class="texto-grade">EM</p>
                </button>
                <button class="grade2">
                    <p class="texto-grade">EF I</p>
                </button>
                <button class="grade3">
                    <p class="texto-grade">EF II</p>
                </button>

            </section>

            <Rodape />
        </div>
    );
}