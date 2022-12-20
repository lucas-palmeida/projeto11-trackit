import styled from "styled-components";
import ContainerPages from "../components/ContainerPages";
import HeaderPadrao from "../components/HeaderPadrao";
import FooterPadrao from "../components/FooterPadrao";

export default function HistoricoPage() {
  return (
    <ContainerPages>
      <HeaderPadrao />
        <TituloHistorico>
            Histórico
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </TituloHistorico>
      <FooterPadrao />
    </ContainerPages>
  );
}

const TituloHistorico = styled.div`
    margin: 28px 17px;
    font-size: 23px;
    font-weight: 400;
    line-height: 29px;
    color: #126BA5;
    p {
        margin-top: 17px;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
    }
`;