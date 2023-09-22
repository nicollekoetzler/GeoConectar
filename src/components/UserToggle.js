import styled from "styled-components";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

export default function userToggle() {
  const router = useRouter();

  async function logoutFunctionality(e) {
    localStorage.setItem("geo-tk", "");
    localStorage.setItem("geo-id", "");
    router.push("/signin");
  }

  return (
    <>
      <MyAccount>
        <Link href="/profile">
          <p>Minha Conta</p>
        </Link>
      </MyAccount>
      <LogoutComponent onClick={logoutFunctionality}>
        <p>Desconectar</p>
      </LogoutComponent>
    </>
  );
}

const MyAccount = styled.div`
  width: 150px;
  height: 43px;
  background-color: white;
  border: 1px solid #cdcdcd;

  right: 0;
  top: 79px;
  position: absolute;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: #754d24;
    font-family: "Roboto";
    font-size: 14px;
    font-weight: 700;

    &:hover {
      cursor: pointer;
    }
  }
`;
const LogoutComponent = styled.div`
  width: 150px;
  height: 43px;
  background-color: #e2ddd7;
  border: 1px solid #cdcdcd;
  border-radius: 0px 0px 0px 20px;

  right: 0;
  top: 121px;
  position: absolute;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: #754d24;
    font-family: "Roboto";
    font-size: 14px;
    font-weight: 700;

    &:hover {
      cursor: pointer;
    }
  }
`;
