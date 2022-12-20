import styled from "styled-components";
import iconeCheck from "../images/whitecheck.png";

export default function CartaoHabito({id,name, done, currentSequence, highestSequence, marcarHabito, desmarcarHabito}) {
  return (
    <CardHabito>
      <div>
        {name}
        <p>
          Sequência atual: {currentSequence} dias
          <br />
          Seu recorde: {highestSequence} dias
        </p>
      </div>
      <div className={done ? "verde" : ""} onClick={() => done ? desmarcarHabito(id) : marcarHabito(id)} >
        <img src={iconeCheck} alt="White check" />
      </div>
    </CardHabito>
  );
}

const CardHabito = styled.li`
  width: 340px;
  height: 94px;
  border-radius: 5px;
  padding: 13px;
  margin-bottom: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFFFF;
  color: #666666;
  div > p {
    margin-top: 7px;
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
  }
  div:nth-child(2) {
    height: 69px;
    width: 69px;
    border-radius: 5px;
    background-color: #EBEBEB;
    border: 1px solid #E7E7E7;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div.verde {
    background-color: #8FC549;
  }
`;