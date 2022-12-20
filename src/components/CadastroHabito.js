import styled from "styled-components";
import InputPadrao from "./TelasIniciais/InputPadrao";

export default function CadastroHabito({setName, days, setDays, setNovo, criarHabito}) {

  function addDays(d) {
    if(!days.includes(d)) {
    const temp = [...days];
    temp.push(d);
    setDays(temp);
    }
    else {
      const temp = days.filter(day => day !== d);
      setDays(temp);
    }
    console.log(days);
  }

  return (
    <CardHabito>
      <div>
        <InputPadrao type="text" placeholder="nome do hábito" onChange={e => setName(e.target.value)} />
        <BotaoDia className={days.includes(0) ? "selecionado" : ""} onClick={() => addDays(0)}>D</BotaoDia>
        <BotaoDia className={days.includes(1) ? "selecionado" : ""} onClick={() => addDays(1)}>S</BotaoDia>
        <BotaoDia className={days.includes(2) ? "selecionado" : ""} onClick={() => addDays(2)}>T</BotaoDia>
        <BotaoDia className={days.includes(3) ? "selecionado" : ""} onClick={() => addDays(3)}>Q</BotaoDia>
        <BotaoDia className={days.includes(4) ? "selecionado" : ""} onClick={() => addDays(4)}>Q</BotaoDia>
        <BotaoDia className={days.includes(5) ? "selecionado" : ""} onClick={() => addDays(5)}>S</BotaoDia>
        <BotaoDia className={days.includes(6) ? "selecionado" : ""} onClick={() => addDays(6)}>S</BotaoDia>
      </div>
      <div>
        <BotaoCancelar onClick={() => setNovo(false)}>Cancelar</BotaoCancelar>
        <BotaoSalvar onClick={criarHabito}>Salvar</BotaoSalvar>
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

const BotaoDia = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  margin: 8px 4px auto auto;
  background-color: #FFFFFF;
  color: #D5D5D5;
  border: 1px solid #D4D4D4;
  &.selecionado {
    color: #FFFFFF;
    background-color: #CFCFCF;
    border: 1px solid #CFCFCF
  }
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
