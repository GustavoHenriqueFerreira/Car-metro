import '../../assets/css/perfilAluno.css'
import padrao from '../../assets/img/padrao.png';
import Cabecalho from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/rodape';

export default function PerfilAluno() {
    return (
        <div>
            <Cabecalho />

            <main className='main_perfil'>
                <div className='container_aluno espacamento_perfil'>
                    <div className='titulo'>
                        <h1 className='titulo_aluno'>Perfil do aluno</h1>
                    </div>

                    <section className='perfil_aluno'>
                        <div className='foto'>
                            <img src={padrao} alt="" />
                        </div>

                        <div className='info_aluno'>
                            <span>Nome:</span>
                            <span>RG:</span>
                            <span>Data da Matrícula:</span>
                            <span>Telefone:</span>
                            <span>Turma:</span>
                            <span>Comorbidade:</span>
                            <span>Comentário:</span>
                        </div>
                    </section>
                </div>
            </main>

            <Rodape />
        </div>
    );
}