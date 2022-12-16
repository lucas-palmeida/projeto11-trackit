import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import CadastroPage from '../pages/CadastroPage';
import HabitosPage from '../pages/HabitosPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <LoginPage /> } />
        <Route path='/cadastro' element={ <CadastroPage /> } />
        <Route path='/habitos' element={ <HabitosPage /> } />
      </Routes>
    </BrowserRouter>
  );
}
