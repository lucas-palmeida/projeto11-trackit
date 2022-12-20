import styled from "styled-components"

export default function CardLembrete() {
    return (
        <Container>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </Container>
    )
}

const Container = styled.li`
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  color: #666666;
`;