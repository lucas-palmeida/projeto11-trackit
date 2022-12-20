import logo from "../images/logo.svg";
import ContainerPage from "../components/TelasIniciais/ContainerPadrao";
import LogoPadrao from "../components/TelasIniciais/LogoPadrao";
import FormPadrao from "../components/TelasIniciais/FormPadrao";
import InputPadrao from "../components/TelasIniciais/InputPadrao";
import LinkPadrao from "../components/TelasIniciais/LinkPadrao";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";

export default function LoginPage() {
  return (
    <ContainerPage>
      <LogoPadrao src={logo} alt="Logotipo TrackIt" />
      <FormPadrao>
        <InputPadrao type="email" placeholder="email" />
        <InputPadrao type="password" placeholder="senha" />
        <BotaoEntrar>
            Entrar
          {/* <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#FFFFFF"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          /> */}
        </BotaoEntrar>
      </FormPadrao>
      <Link to="/cadastro">
        <LinkPadrao>Não tem uma conta? Cadastre-se!</LinkPadrao>
      </Link>
    </ContainerPage>
  );
}

const BotaoEntrar = styled.button`
  width: 100%;
  height: 45px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #52b6ff;
  border: none;
  font-size: 21px;
  font-weight: 400;
  line-height: 26px;
  color: #ffffff;
`;
