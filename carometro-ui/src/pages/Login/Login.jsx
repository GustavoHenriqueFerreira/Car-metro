import '../../assets/css/login.css'
import logo from '../../assets/img/logo 2.png';
import undraw from '../../assets/img/undraw_education_f8ru 1.png';
import Cabecalho from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/rodape';

export default function Login() {
    return (
        <div>
            <div className="container_login">
                <div className='background'>
                    <img className="undraw" src={undraw} alt=""></img>
                </div>

                <div className='logar'>
                    <div>
                        <img className="logo" src={logo} alt="" />
                    </div>

                    <div className="box_login">
                        <form className="">

                            <div className="box_input">
                                <input className="input_login"
                                    name="email"
                                    type="email"
                                    placeholder="Email">
                                </input>

                                <input className="input_login"
                                    name="senha"
                                    type="password"
                                    placeholder="Senha">
                                </input>
                            </div>

                            <div class="box_btn">
                                <button type="button" class="btn_login">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
}
