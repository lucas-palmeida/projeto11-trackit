import logo from "../images/logo.svg";
import ContainerPage from "../components/TelasIniciais/ContainerPadrao";
import LogoPadrao from "../components/TelasIniciais/LogoPadrao";
import FormPadrao from "../components/TelasIniciais/FormPadrao";
import InputPadrao from "../components/TelasIniciais/InputPadrao";
import BotaoPadrao from "../components/TelasIniciais/BotaoPadrao";
import LinkPadrao from "../components/TelasIniciais/LinkPadrao";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { useContext, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import UserContext from "../contexts/UserContext";
import axios from "axios";

export default function LoginPage() {
  const [desabilitado, setDesabilitado] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setToken } = useContext(AuthContext);
  const { setUser } = useContext(UserContext);

  function login(e) {
    e.preventDefault();
    setDesabilitado(true);
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
    const body = { email, password };

    const promise = axios.post(URL, body);
    promise.then((res) => {
      setToken(res.data.token);
      setUser(res.data.image);
      navigate("/hoje");
    });
    promise.catch((err) => {
      alert(err.response.data.message);
      setDesabilitado(false);
    });
  }

  return (
    <ContainerPage>
      <LogoPadrao src={logo} alt="Logotipo TrackIt" />
      <FormPadrao>
        <InputPadrao
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          disabled={desabilitado}
        />
        <InputPadrao
          type="password"
          placeholder="senha"
          onChange={(e) => setPassword(e.target.value)}
          disabled={desabilitado}
        />
        <BotaoPadrao
          className={desabilitado ? "desbotado" : " "}
          onClick={login}
        >
          {desabilitado ? "" : "Entrar"}
          <ThreeDots
            height="15"
            width="80"
            radius="9"
            color="#FFFFFF"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={desabilitado}
          />
        </BotaoPadrao>
      </FormPadrao>
      <Link to="/cadastro">
        <LinkPadrao>Não tem uma conta? Cadastre-se!</LinkPadrao>
      </Link>
    </ContainerPage>
  );
}
