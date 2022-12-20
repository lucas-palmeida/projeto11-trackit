import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import CadastroPage from "../pages/CadastroPage";
import HabitosPage from "../pages/HabitosPage";
import HojePage from "../pages/HojePage";
import HistoricoPage from "../pages/HistoricoPage";
import { useState } from "react";
import AuthContext from "../contexts/AuthContext";
import UserContext from "../contexts/UserContext";

export default function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <UserContext.Provider value={{ user, setUser }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/cadastro" element={<CadastroPage />} />
              <Route path="/habitos" element={<HabitosPage />} />
              <Route path="/hoje" element={<HojePage />} />
              <Route path="/historico" element={<HistoricoPage />} />
            </Routes>
          </BrowserRouter>
      </UserContext.Provider>
    </AuthContext.Provider>
  );
}
