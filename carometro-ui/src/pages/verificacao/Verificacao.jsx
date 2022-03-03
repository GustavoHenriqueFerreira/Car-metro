import '../../assets/css/verificacao.css'
import img_verificao from '../../assets/img/padrao_verificar.png';

export default function Verificacao() {
    return (
        <div>
            <main className='main_aluno'>
                <div className='container_aluno espacamento_verificacao'>

                    <img src={img_verificao} alt='' className='img_verificao' />

                    <button className='btn_verificacao'>Verificar</button>

                    <div className='conteudo_verificado'>
                        <p className='infos_verificadas'>Gustavo Rezende</p>
                        <p className='infos_verificadas'>3° ano A EM</p>
                    </div>
                    {/* <div class="box_btn_professor"> */}
                </div>
            </main>
        </div>
    );
}