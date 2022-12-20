import styled from "styled-components";
import ContainerPages from "../components/ContainerPages";
import HeaderPadrao from "../components/HeaderPadrao";
import FooterPadrao from "../components/FooterPadrao";
import CadastroHabito from "../components/CadastroHabito";
import HabitoCadastrado from "../components/HabitoCadastrado";
import CardLembrete from "../components/CardLembrete";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import AuthContext from "../contexts/AuthContext";

export default function HabitosPage() {
  const { token } = useContext(AuthContext);
  const [habitos, setHabitos] = useState([]);
  const [novo, setNovo] = useState(false);
  const [name, setName] = useState("");
  const [days, setDays] = useState([]);
  const [atualiza, setAtualiza] = useState(false);

  useEffect(() => {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    const promise = axios.get(URL, config);
    promise.then((res) => setHabitos(res.data));
    promise.catch((err) => console.log(err.response.data));
  }, [novo, atualiza]);

  function criarHabito() {
    const body = { name, days };
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.post(URL, body, config);
    promise.then((res) => setAtualiza(!atualiza));
    promise.catch((err) => console.log(err));
    setName("");
    setDays([]);
    setNovo(false);
  }

  function deletarHabito(id) {
    if (window.confirm("Deseja realmente deletar esse hábito?")) {
      const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const promise = axios.delete(URL, config);
      promise.then((res) => setAtualiza(!atualiza));
      promise.catch((err) => console.log(err.response.message));
    }
  }

  return (
    <ContainerPages>
      <HeaderPadrao />
      <TituloLista>
        Meus hábitos
        <BotaoAddHabito onClick={() => setNovo(true)}>+</BotaoAddHabito>
      </TituloLista>
      <ListaHabitos>
        {!novo ? null : (
          <CadastroHabito
            setName={setName}
            days={days}
            setDays={setDays}
            setNovo={setNovo}
            criarHabito={criarHabito}
          />
        )}
        {habitos.length === 0 ? (
          <CardLembrete />
        ) : (
          habitos.map((h) => (
            <HabitoCadastrado
              key={h.id}
              id={h.id}
              name={h.name}
              days={h.days}
              deletarHabito={deletarHabito}
            />
          ))
        )}
      </ListaHabitos>
      <FooterPadrao />
    </ContainerPages>
  );
}

const TituloLista = styled.div`
  font-size: 23px;
  font-weight: 400;
  line-height: 29px;
  color: #126ba5;
  padding: 22px 18px 0px 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BotaoAddHabito = styled.button`
  width: 40px;
  height: 35px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #52b6ff;
  border: none;
  font-size: 27px;
  font-weight: 400;
  line-height: 34px;
  color: #ffffff;
`;
export const ListaHabitos = styled.ul`
  width: 100%;
  padding: 20px 18px 20px 17px;
  background-color: #e5e5e5;
  box-sizing: border-box;
`;
