import ContainerPages from "../components/ContainerPages";
import HeaderPadrao from "../components/HeaderPadrao";
import { ListaHabitos } from "./HabitosPage";
import CartaoHabito from "../components/CartaoHabito";
import FooterPadrao from "../components/FooterPadrao";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import axios from "axios";
import CardLembrete from "../components/CardLembrete";

export default function HojePage() {
  const dataAtual = new Date();
  const diasDaSemana = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const { token } = useContext(AuthContext);
  const [habitos, setHabitos] = useState([]);
  const [atualiza, setAtualiza] = useState(false);

  useEffect(() => {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const promise = axios.get(URL, config);
    promise.then((res) => setHabitos(res.data));
    promise.catch((err) => console.log(err.response.data));
  }, [atualiza]);

  function marcarHabito(id) {
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
    const body = {};
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.post(URL, body, config);
    promise.then(() => setAtualiza(!atualiza));
    promise.catch((err) => console.log(err));
  }

  function desmarcarHabito(id) {
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
    const body = {};
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.post(URL, body, config);
    promise.then(() => setAtualiza(!atualiza));
    promise.catch((err) => console.log(err));
  }

  return (
    <ContainerPages>
      <HeaderPadrao />
      <TituloDia>
        {diasDaSemana[dataAtual.getDay()]}, {dataAtual.getDate()}/
        {dataAtual.getMonth()}
        <p>Nenhum hábito concluído ainda</p>
      </TituloDia>
      <ListaHabitos>
        {habitos.length === 0 ? (
          <CardLembrete />
        ) : (
          habitos.map((h) => (
            <CartaoHabito
              key={h.id}
              id={h.id}
              name={h.name}
              done={h.done}
              currentSequence={h.currentSequence}
              highestSequence={h.highestSequence}
              marcarHabito={marcarHabito}
              desmarcarHabito={desmarcarHabito}
            />
          ))
        )}
      </ListaHabitos>
      <FooterPadrao />
    </ContainerPages>
  );
}

const TituloDia = styled.div`
  margin: 28px 0px 0px 17px;
  font-size: 23px;
  font-weight: 400;
  line-height: 29px;
  color: #126ba5;
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    color: #bababa;
  }
`;
