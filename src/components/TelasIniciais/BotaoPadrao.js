import styled from "styled-components";

const BotaoPadrao = styled.button`
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
  &.desbotado {
    opacity: 70%;
  }
`;

export default BotaoPadrao;