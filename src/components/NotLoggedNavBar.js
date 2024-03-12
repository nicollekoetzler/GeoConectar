import styled from "@emotion/styled";
import Link from "next/link";
import logo from "../../public/imgs/svglogohorizontal.svg";
import logoMobile from "../../public/imgs/svglogo.svg";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function NotLoggedNavBar() {
    const [visible, setVisible] = useState(false);

    function showNotLoggedMessge() {
        if (isNotLogged()) setVisible(true);
    }

    function isNotLogged() {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem("geo-tk");
            return !token;
        } else {
            return false;
        }
    }

    useEffect(showNotLoggedMessge, []);

    return(
      <TopBar visible={visible}>
        <TopBarLeftLinks>
          <Link href="/services">
            <Image
              width={170}
              src={logo}
              alt="Logo da GeoConectar e nome do site em marrom"
            />
          </Link>
          <Link href="/services">
            <Image src={logoMobile} alt="Logo da GeoConectar em marrom" />
          </Link>
        </TopBarLeftLinks>
        <TopBarLinks>
          <Link href="/about-us">
            <h3>Sobre nós</h3>
          </Link>
        </TopBarLinks>
        <TopBarRightLinks>
          <Link href="/signin">
            <h3>Login</h3>
          </Link>
          <Link href="/signup">
            <h3>Cadastre-se</h3>
          </Link>
        </TopBarRightLinks>
      </TopBar>
    )
}

const TopBar = styled.div`
  display: ${({ visible }) => visible ?'flex' : 'none'};
  min-height: 80px;
  width: 100%;
  background-color: white;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #cdcdcd;
  padding: 0px 64px 0px 64px;

  @media screen and (max-width: 600px) {
    padding: 0px 10px;
  }
`;

const TopBarLeftLinks = styled.div`
  width: 25%;
  padding: 0 10px;

  button {
    font-family: "Saira Semi Condensed";
    font-size: 32px;
    font-weight: 700;
    color: #754d24;
    cursor: pointer;
    background-color: white;
    border: none;
  }

  a:first-child {
    display: flex;
  }

  a:last-child {
    display: none;
  }

  @media screen and (max-width: 800px) {
    img {
      width: 70px;
      height: auto;
    }

    a:first-child {
      display: none;
    }
    a:last-child {
      display: flex;
    }

    button {
      font-size: 22px;
    }
  }
`;

const TopBarLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  font-family: "Roboto";

  a {
    text-align: center;
  }

  h3 {
    color: #1e1e1e;
    font-size: 18px;
    cursor: pointer;
    transition: 0.3s;
  }

  h3:nth-child(1) {
    margin-right: 32px;
  }

  h3:hover {
    color: #754d24;
  }

  @media screen and (max-width: 600px) {
    width: 100%;

    h3 {
      font-size: 14px;
      align-self: center;
    }
  }
`;

const TopBarRightLinks = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 25%;
  font-family: "Roboto";

  h3 {
    font-size: 18px;
    cursor: pointer;
    transition: 0.3s;
  }

  a:nth-child(1) {
    margin-right: 32px;
    color: #1e1e1e;
  }

  a:nth-child(2) {
    color: #754d24;
    font-weight: 700;
  }

  h3:hover {
    color: #754d24;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    justify-content: center;

    h3 {
      font-size: 14px;
      align-self: center;
    }
  }
`;