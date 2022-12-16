import logo from '../images/logo.svg';
import ContainerPage from '../components/TelasIniciais/ContainerPadrao';
import LogoPadrao from '../components/TelasIniciais/LogoPadrao';
import FormPadrao from '../components/TelasIniciais/FormPadrao';
import InputPadrao from '../components/TelasIniciais/InputPadrao';
import LinkPadrao from '../components/TelasIniciais/LinkPadrao';
import { Link } from 'react-router-dom';

export default function CadastroPage() {
    return (
        <ContainerPage>
            <LogoPadrao src={logo} alt='Logotipo TrackIt' />
            <FormPadrao>
                <InputPadrao type='email' placeholder='email' />
                <InputPadrao type='password' placeholder='senha' />
                <InputPadrao type='text' placeholder='nome' />
                <InputPadrao type='url' placeholder='foto' />
                <InputPadrao className='botao-padrao' type='submit' value='Cadastrar' />
            </FormPadrao>
            <Link to='/'>
                <LinkPadrao>Já tem uma conta? Faça login!</LinkPadrao>
            </Link>
        </ContainerPage>
    )
}