import styled from "styled-components"

export default function HabitosPage() {
    return (
        <ContainerHabitos>
            <Header>
                TrackIt
                <FotoUsuario src='https://i.pinimg.com/550x/f6/ae/c9/f6aec9493c2204676e25ad607a9cbce3.jpg' alt='Foto usuario' />
            </Header>
            <Footer>
                <LinkFooter>Hábitos</LinkFooter>
                <LinkFooter>Histórico</LinkFooter>
            </Footer>
        </ContainerHabitos>
    )
}

const ContainerHabitos = styled.main`
    min-width: 360px;
    width: 100vw;
    min-height: 667px;
    height: 100vh;
    box-sizing: border-box;
    padding-top: 70px;
    position: relative;
    background-color: #E5E5E5;
`;

const Header = styled.header`
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0px 10px 0px 18px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px 0px #00000026;
    font-family: 'Playball', sans-serif;
    font-size: 39px;
    font-weight: 400;
    line-height: 49px;
    color: #FFFFFF;
`;

const FotoUsuario = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 98px;
`;

const Footer = styled.footer`
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0px 31px 0px 36px;
    background-color: #FFFFFF;
`;

const LinkFooter = styled.p`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    color: #52B6FF;
`;