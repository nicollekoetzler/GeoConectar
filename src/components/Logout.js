import styled from "styled-components";
import { signin } from "@/services/authRequisitions";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Logout() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  async function logoutFunctionality(e) {
    localStorage.setItem("token", "");
    router.push("/signin");
  }

    return (
        <LogoutComponents onClick={logoutFunctionality}>
            <p>Desconectar</p>
        </LogoutComponents>
    );
}

const LogoutComponents = styled.div`
    width: 150px;
    height: 43px;
    background-color: white;
    border: 1px solid #CDCDCD;

    right: 0;
    top: 79px;
    position: absolute;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 0px 0px 0px 20px;

    p {
        color: #585858;
        font-family: "Roboto";
        font-size: 14px;
        font-weight: 500;

        &:hover {
            cursor: pointer;
        }
    }
`