import styled from "styled-components";

export default function HabitoCadastrado({id, name, days, deletarHabito}) {
  return (
    <CardHabito>
      <div>
        <TextoHabito>{name}<ion-icon name="trash-outline" onClick={() => deletarHabito(id)}></ion-icon></TextoHabito>
        <BotaoDia className={days.includes(0) ? "selecionado" : ""}>D</BotaoDia>
        <BotaoDia className={days.includes(1) ? "selecionado" : ""}>S</BotaoDia>
        <BotaoDia className={days.includes(2) ? "selecionado" : ""}>T</BotaoDia>
        <BotaoDia className={days.includes(3) ? "selecionado" : ""}>Q</BotaoDia>
        <BotaoDia className={days.includes(4) ? "selecionado" : ""}>Q</BotaoDia>
        <BotaoDia className={days.includes(5) ? "selecionado" : ""}>S</BotaoDia>
        <BotaoDia className={days.includes(6) ? "selecionado" : ""}>S</BotaoDia>
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
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
`;

const BotaoDia = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  margin: 8px 4px auto auto;
  background-color: #FFFFFF;
  color: #D5D5D5;
  border: 1px solid #D4D4D4;
  &.selecionado{
    color: #FFFFFF;
    background-color: #CFCFCF;
    border: 1px solid #CFCFCF
  }
`;
