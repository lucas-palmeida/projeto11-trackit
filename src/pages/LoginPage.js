import logo from '../images/logo.svg';
import ContainerPage from '../components/TelasIniciais/ContainerPadrao';
import LogoPadrao from '../components/TelasIniciais/LogoPadrao';
import FormPadrao from '../components/TelasIniciais/FormPadrao';
import InputPadrao from '../components/TelasIniciais/InputPadrao';
import LinkPadrao from '../components/TelasIniciais/LinkPadrao';
import { Link } from 'react-router-dom';

export default function LoginPage() {
    return (
        <ContainerPage>
            <LogoPadrao src={logo} alt="Logotipo TrackIt" />
            <FormPadrao>
                <InputPadrao type='email' placeholder='email' />
                <InputPadrao type='password' placeholder='senha' />
                <InputPadrao className='botao-padrao' type='submit' value='Entrar' />
            </FormPadrao>
            <Link to='/cadastro'>
                <LinkPadrao>Não tem uma conta? Cadastre-se!</LinkPadrao>
            </Link>
        </ContainerPage>
    )
}
