import ContainerPages from "../components/ContainerPages";
import HeaderPadrao from "../components/HeaderPadrao";
import { ListaHabitos } from "./HabitosPage";
import CartaoHabito from "../components/CartaoHabito";
import FooterPadrao from "../components/FooterPadrao";
import styled from "styled-components";

export default function HojePage() {
  return (
    <ContainerPages>
      <HeaderPadrao />
      <TituloDia>
        Segunda, 17/05
        <p>Nenhum hábito concluído ainda</p>
      </TituloDia>
      <ListaHabitos>
        <CartaoHabito />
        <CartaoHabito />
      </ListaHabitos>
      <FooterPadrao />
    </ContainerPages>
  );
}

const TituloDia = styled.div`
  margin: 28px 0px 0px 17px;
  font-size: 23px;
  font-weight: 400;
  line-height: 29px;
  color: #126ba5;
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    color: #bababa;
  }
`;

