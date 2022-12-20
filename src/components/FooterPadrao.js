import { Link } from "react-router-dom";
import styled from "styled-components";

export default function FooterPadrao() {
  return (
    <Footer>
      <Link to="/habitos">
        <LinkFooter>Hábitos</LinkFooter>
      </Link>
      <div>
        <Link to="/hoje">
          <ProgressBar>Hoje</ProgressBar>
        </Link>
      </div>
      <Link to="/historico">
        <LinkFooter>Histórico</LinkFooter>
      </Link>
    </Footer>
  );
}

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
  background-color: #ffffff;
  div {
    position: relative;
  }
`;

const LinkFooter = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  color: #52b6ff;
`;

const ProgressBar = styled.div`
  width: 91px;
  height: 91px;
  border-radius: 45px;
  background-color: #52b6ff;
  position: fixed;
  bottom: 24px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  color: #ffffff;
`;
