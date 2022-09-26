import NuKenzie from "/src/assets/img/Nu Kenzie.svg";
import illustration from "/src/assets/img/illustration.svg";
import "./style.css";
import { FaSignInAlt } from "react-icons/fa";

export default function Login({ setLogin }) {
  return (
    <div className="login_window">
      <div className="login_container ">
        <section className="login_infos">
          <img src={NuKenzie} alt="NuKenzie" />
          <h1 className="login_title">
            Centralize o controle das suas finanças...
          </h1>
          <p>...de forma rápida e segura</p>
          <button className="button_login" onClick={() => setLogin(true)}>
            <FaSignInAlt />
            Iniciar
          </button>
        </section>
        <section className="login_image">
          <img  src={illustration} alt="..." />
        </section>
      </div>
    </div>
  );
}

