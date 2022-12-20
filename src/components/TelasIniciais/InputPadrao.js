import styled from "styled-components";

const InputPadrao = styled.input`
  width: 100%;
  height: 45px;
  box-sizing: border-box;
  border: 1px solid #d4d4d4;
  border-radius: 5px;
  padding-left: 11px;
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  &::placeholder {
    color: #dbdbdb;
  }
  &:disabled {
    background-color: #f2f2f2;
  }
`;

export default InputPadrao;
