import styled from "styled-components";

const FormPadrao = styled.form`
    width: 303px;
    display: flex;
    flex-direction: column;
    margin-top: 32px;
    input:nth-child(2n) {
        margin: 6px 0;
    }
    input.botao-padrao {
        background-color: #52B6FF;
        border: none;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 21px;
        font-weight: 400;
        line-height: 26px;
        color: #FFFFFF;
    }
`;

export default FormPadrao;