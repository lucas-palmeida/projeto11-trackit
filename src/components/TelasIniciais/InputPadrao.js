import styled from "styled-components";

const InputPadrao = styled.input`
    width: 100%;
    height: 45px;
    box-sizing: border-box;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    padding-left: 11px;
    &::placeholder {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        color: #DBDBDB;
    }
`;

export default InputPadrao;