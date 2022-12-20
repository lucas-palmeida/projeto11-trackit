import styled from "styled-components";
import InputPadrao from "./TelasIniciais/InputPadrao";

export default function CadastraHabito() {
  return (
    <CardHabito>
      <div>
        <InputPadrao type="text" placeholder="nome do hábito" />
        {/* <TextoHabito>Meu hábito<ion-icon name="trash-outline"></ion-icon></TextoHabito> */}
        <BotaoDia>D</BotaoDia>
        <BotaoDia>S</BotaoDia>
        <BotaoDia>T</BotaoDia>
        <BotaoDia>Q</BotaoDia>
        <BotaoDia>Q</BotaoDia>
        <BotaoDia>S</BotaoDia>
        <BotaoDia>S</BotaoDia>
      </div>
      <div>
        <BotaoCancelar>Cancelar</BotaoCancelar>
        <BotaoSalvar>Salvar</BotaoSalvar>
      </div>
    </CardHabito>
  );
}

const CardHabito = styled.li`
  width: 340px;
  padding: 18px 18px 15px 19px;
  margin-bottom: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

const TextoHabito = styled.p`
  width: 303px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666666;
`;

const BotaoDia = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  margin: 8px 4px auto auto;
  background-color: #FFFFFF;
  color: #D5D5D5;
  border: 1px solid #D4D4D4;
`;

const BotaoSalvar = styled.button`
  width: 84px;
  height: 35px;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  margin-top: 29px;
  margin-left: 13px;
  border: none;
  background-color: #52b6ff;
  color: #ffffff;
`;

const BotaoCancelar = styled.button`
  width: 84px;
  height: 35px;
  font-size: 16px;
  line-height: 20px;
  background-color: #FFFFFF;
  border: none;
  color: #52B6FF;
`;
