import styled from "styled-components";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link"

export default function userToggle() {
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
      <>
        <MyAccount>
          <Link href="/profile"><p>Minha Conta</p></Link>
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
    border: 1px solid #CDCDCD;
    
    right: 0;
    top: 79px;
    position: absolute;
    z-index: 2;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    p {
        color: #4E693C;
        font-family: "Roboto";
        font-size: 14px;
        font-weight: 700;

        &:hover {
            cursor: pointer;
        }
    }
`
        const LogoutComponent = styled.div`
            width: 150px;
            height: 43px;
            background-color: #E7E4C9;
            border: 1px solid #CDCDCD;
            border-radius: 0px 0px 0px 20px;
        
            right: 0;
            top: 121px;
            position: absolute;
            z-index: 2;
        
            display: flex;
            align-items: center;
            justify-content: center;
        
            p {
                color: #4E693C;
                font-family: "Roboto";
                font-size: 14px;
                font-weight: 700;
        
                &:hover {
                    cursor: pointer;
                }
            }
        `