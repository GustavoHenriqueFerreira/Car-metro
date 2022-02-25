import '../../assets/css/login.css'
import logo from '../../assets/img/logo.png';
import undraw from '../../assets/img/undraw.png'

export default function Login() {
    return (
        <div>
            <div className="container_login">
                <div>
                    <img width="500px" scr={logo} />
                    <img width="500px" scr={undraw}/>
                </div>
                <div className="box_login">
                    <form className="">

                        <div className="box_input">
                            <input className="input_login"
                                name="email"
                                type="text"
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
    );
}
