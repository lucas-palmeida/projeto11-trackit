import styled from "styled-components";
import ContainerPages from "../components/ContainerPages";
import HeaderPadrao from "../components/HeaderPadrao";
import FooterPadrao from "../components/FooterPadrao";
import CadastraHabito from "../components/CadastraHabito";

export default function HabitosPage() {
  return (
    <ContainerPages>
      <HeaderPadrao />
      <TituloLista>
        Meus hábitos
        <BotaoAddHabito>+</BotaoAddHabito>
      </TituloLista>
      <ListaHabitos>
        <CadastraHabito />
        <CadastraHabito />

        <CardLembrete>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </CardLembrete>
      </ListaHabitos>
      <FooterPadrao />
    </ContainerPages>
  );
}

const TituloLista = styled.div`
  font-size: 23px;
  font-weight: 400;
  line-height: 29px;
  color: #126ba5;
  padding: 22px 18px 0px 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BotaoAddHabito = styled.button`
  width: 40px;
  height: 35px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #52b6ff;
  border: none;
  font-size: 27px;
  font-weight: 400;
  line-height: 34px;
  color: #ffffff;
`;
export const ListaHabitos = styled.ul`
  width: 100%;
  padding: 20px 18px 20px 17px;
  background-color: #e5e5e5;
  box-sizing: border-box;
`;

const CardLembrete = styled.li`
  margin-top: 29px;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  color: #666666;
`;