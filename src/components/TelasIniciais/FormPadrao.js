import styled from "styled-components";

const FormPadrao = styled.form`
    width: 303px;
    display: flex;
    flex-direction: column;
    margin-top: 32px;
    input:nth-child(2n) {
        margin: 6px 0;
    }
`;

export default FormPadrao;