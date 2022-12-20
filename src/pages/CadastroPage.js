import logo from "../images/logo.svg";
import ContainerPage from "../components/TelasIniciais/ContainerPadrao";
import LogoPadrao from "../components/TelasIniciais/LogoPadrao";
import FormPadrao from "../components/TelasIniciais/FormPadrao";
import InputPadrao from "../components/TelasIniciais/InputPadrao";
import BotaoPadrao from "../components/TelasIniciais/BotaoPadrao";
import LinkPadrao from "../components/TelasIniciais/LinkPadrao";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

export default function CadastroPage() {
    const [desabilitado, setDesabilitado] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();
  
    function cadastrar(e) {
      e.preventDefault();
      setDesabilitado(true);

      const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
      const body = { email, name, image, password };

      const promise = axios.post(URL, body);
      promise.then((res) => {
        navigate('/');
      })
      promise.catch((err) => {
        alert(err.response.data.message);
        setDesabilitado(false);
      });
    }
  return (
    <ContainerPage>
      <LogoPadrao src={logo} alt="Logotipo TrackIt" />
      <FormPadrao>
        <InputPadrao type="email" placeholder="email" onChange={e => setEmail(e.target.value)} disabled={desabilitado} />
        <InputPadrao type="password" placeholder="senha" onChange={e => setPassword(e.target.value)} disabled={desabilitado} />
        <InputPadrao type="text" placeholder="nome" onChange={e => setName(e.target.value)} disabled={desabilitado} />
        <InputPadrao type="url" placeholder="foto" onChange={e => setImage(e.target.value)} disabled={desabilitado} />
        <BotaoPadrao
          className={desabilitado ? "desbotado" : " "}
          onClick={cadastrar}
        >
          {desabilitado ? "" : "Cadastrar"}
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
      <Link to="/">
        <LinkPadrao>Já tem uma conta? Faça login!</LinkPadrao>
      </Link>
    </ContainerPage>
  );
}
